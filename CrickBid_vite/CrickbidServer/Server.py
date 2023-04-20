from flask import Flask, jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:arush123@localhost:3306/cricket_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

selectedPlayerId = 0
playerRankData = {}

Overall = pickle.load(open(
    'E:/4thYear/FYP_THINGS/New folder/Cricket Bid/Cricket Bid/CrickBid_vite/CrickbidServer/Overall_Model.pickle', 'rb'))
Recent = pickle.load(open(
    'E:/4thYear/FYP_THINGS/New folder/Cricket Bid/Cricket Bid/CrickBid_vite/CrickbidServer/Recent_Model.pickle', 'rb'))
Home = pickle.load(open(
    'E:/4thYear/FYP_THINGS/New folder/Cricket Bid/Cricket Bid/CrickBid_vite/CrickbidServer/Home_Model.pickle', 'rb'))
Away = pickle.load(open(
    'E:/4thYear/FYP_THINGS/New folder/Cricket Bid/Cricket Bid/CrickBid_vite/CrickbidServer/Away_Model.pickle', 'rb'))

class player_data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    player_name = db.Column(db.String(100), nullable=False)
    team = db.Column(db.String(100), nullable=False)
    overall_innings = db.Column(db.String(20), nullable=False)
    overall_runs = db.Column(db.String(20), nullable=False)
    overall_notout = db.Column(db.String(20), nullable=False)
    balls = db.Column(db.String(20), nullable=False)
    centuries = db.Column(db.String(20), nullable=False)
    fifties = db.Column(db.String(20), nullable=False)
    thirties = db.Column(db.String(20), nullable=False)
    zeros = db.Column(db.String(20), nullable=False)
    overall_average = db.Column(db.String(20), nullable=False)
    strike_rate = db.Column(db.String(20), nullable=False)
    form_innings = db.Column(db.String(20), nullable=False)
    form_runs = db.Column(db.String(20), nullable=False)
    recent_not_outs = db.Column(db.String(20), nullable=False)
    recent_100s = db.Column(db.String(20), nullable=False)
    recent_50s = db.Column(db.String(20), nullable=False)
    recent_30s = db.Column(db.String(20), nullable=False)
    recent_zeros = db.Column(db.String(20), nullable=False)
    form_average = db.Column(db.String(20), nullable=False)
    home_innings = db.Column(db.String(20), nullable=False)
    home_runs = db.Column(db.String(20), nullable=False)
    home_not_out_count = db.Column(db.String(20), nullable=False)
    home_100s = db.Column(db.String(20), nullable=False)
    home_50s = db.Column(db.String(20), nullable=False)
    home_30s = db.Column(db.String(20), nullable=False)
    home_zeros = db.Column(db.String(20), nullable=False)
    home_average = db.Column(db.String(20), nullable=False)
    away_innings = db.Column(db.String(20), nullable=False)
    away_runs = db.Column(db.String(20), nullable=False)
    away_not_out_count = db.Column(db.String(20), nullable=False)
    away_100s = db.Column(db.String(20), nullable=False)
    away_50s = db.Column(db.String(20), nullable=False)
    away_30s = db.Column(db.String(20), nullable=False)
    away_zeros = db.Column(db.String(20), nullable=False)
    away_average = db.Column(db.String(20), nullable=False)
    img_url = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Player: {self.player_name}>'

    def __init__(self, player_name, team, overall_innings, overall_runs, overall_notout,
                 balls, centuries, fifties, thirties, zeros, overall_average,
                 strike_rate, form_innings, form_runs, recent_not_outs, recent_100s,
                 recent_50s, recent_30s, recent_zeros, form_average, home_innings, home_runs,
                 home_not_out_count, home_100s, home_50s, home_30s, home_zeros, home_average,
                 away_innings, away_runs, away_not_out_count, away_100s, away_50s, away_30s,
                 away_zeros, away_average, img_url):

        self.player_name = player_name
        self.team = team
        self.overall_innings = overall_innings
        self.overall_runs = overall_runs
        self.overall_notout = overall_notout
        self.balls = balls
        self.centuries = centuries
        self.fifties = fifties
        self.thirties = thirties
        self.zeros = zeros
        self.overall_average = overall_average
        self.strike_rate = strike_rate
        self.form_innings = form_innings
        self.form_runs = form_runs
        self.recent_not_outs = recent_not_outs
        self.recent_100s = recent_100s
        self.recent_50s = recent_50s
        self.recent_30s = recent_30s
        self.recent_zeros = recent_zeros
        self.form_average = form_average
        self.home_innings = home_innings
        self.home_runs = home_runs
        self.home_not_out_count = home_not_out_count
        self.home_100s = home_100s
        self.home_50s = home_50s
        self.home_30s = home_30s
        self.home_zeros = home_zeros
        self.home_average = home_average
        self.away_innings = away_innings
        self.away_runs = away_runs
        self.away_not_out_count = away_not_out_count
        self.away_100s = away_100s
        self.away_50s = away_50s
        self.away_30s = away_30s
        self.away_zeros = away_zeros
        self.away_average = away_average
        self.img_url = img_url

@app.route('/Rec', methods = ['GET'])
def fetchImages():
    data = player_data.query.all()
    
    dataList = []
    for row in data:
        dataList.append({'id': row.id, 'name': row.player_name,'team': row.team,
                          'innings': row.overall_innings,'runs': row.overall_runs,
                         'average': row.overall_average, 'strike_rate': row.strike_rate,
                         'centuries': row.centuries, 'fifties': row.fifties, 'url': row.img_url})
    return jsonify(dataList)

@app.route('/Rec/slectedPlayer', methods=['POST'])
def playerSelection():
    global selectedPlayerId
    selectedPlayerId = request.get_data().decode('utf-8')
    selectedPlayerId = int(selectedPlayerId)
    
    return '1'


@app.route('/Stat', methods=['GET'])
def Statistics():
    data = player_data.query.all()

    dataList = []
    for row in data:
        dataList.append({'id': row.id, 'name': row.player_name, 
                          'runs': row.overall_runs,'average': row.overall_average,
                            'strike_rate': row.strike_rate,'url': row.img_url})
    return jsonify(dataList)

@app.route('/Rec-2', methods=['GET'])
def fetchImages_rec2():
    data = player_data.query.all()
    dataList = []
    for row in data:
        id = int(row.id)
        if id != selectedPlayerId:
            dataList.append(
                {'id': row.id, 'name': row.player_name, 'url': row.img_url})
        else:
            pass
    return jsonify(dataList)
    
@app.route('/Rec-2/selectedPlayers', methods=['POST'])
def selectedPlayers():
    
    PlayerIds = request.get_json()
    predType = PlayerIds['predictionType']
    PlayerIds = PlayerIds['ids']
    playerComparison(predType, PlayerIds)
    return '1'

def playerComparison(predType,PlayerIds):
    global playerRankData
    
    playerRanks = []

    if predType == '1':
        for pid in PlayerIds:
            pid = int(pid)
            row = player_data.query.filter_by(id=pid).first()
            result = overallPredict(row)

            playerRanks.append(
                {'id': row.id, 'name': row.player_name, 'average': row.overall_average, 'runs': row.overall_runs, 'url': row.img_url, 'rank': result, 'category': 'overall'})

        playerRanks = sorted(
            playerRanks, key=lambda x: x['rank'], reverse=True)
        playerRankData['playerRankings'] = playerRanks

        row = player_data.query.filter_by(id=selectedPlayerId).first()
        result = overallPredict(row)
        selectedPlayerData = [row.id, row.player_name,
                      row.overall_average, row.overall_runs, row.img_url, result, 'overall']
        Recommendation(selectedPlayerData, playerRanks)

    elif predType == '2':
        for pid in PlayerIds:
            pid = int(pid)
            row = player_data.query.filter_by(id=pid).first()
            result = RecentPredict(row)
            
            playerRanks.append(
                {'id': row.id, 'name': row.player_name, 'average': row.form_average, 'runs': row.form_runs, 'url': row.img_url, 'rank': result, 'category': 'Recent'})

        playerRanks = sorted(
            playerRanks, key=lambda x: x['rank'], reverse=True)
        playerRankData['playerRankings'] = playerRanks

        row = player_data.query.filter_by(id=selectedPlayerId).first()
        result = overallPredict(row)
        selectedPlayerData = [row.id, row.player_name,
                              row.form_average, row.form_runs, row.img_url, result, 'Recent']
        Recommendation(selectedPlayerData, playerRanks)
    elif predType == '3':
        for pid in PlayerIds:
            pid = int(pid)
            row = player_data.query.filter_by(id=pid).first()
            result = HomePredict(row)
            playerRanks.append(
                {'id': row.id, 'name': row.player_name, 'average': row.home_average, 'runs': row.home_runs, 'url': row.img_url, 'rank': result, 'category': 'Home'})

        playerRanks = sorted(
            playerRanks, key=lambda x: x['rank'], reverse=True)
        playerRankData['playerRankings'] = playerRanks

        row = player_data.query.filter_by(id=selectedPlayerId).first()
        result = overallPredict(row)
        selectedPlayerData = [row.id, row.player_name,
                              row.home_average, row.home_runs, row.img_url, result, 'Home']
        Recommendation(selectedPlayerData, playerRanks)
    elif predType == '4':
        for pid in PlayerIds:
            pid = int(pid)
            row = player_data.query.filter_by(id=pid).first()
            result = AwayPredict(row)
            playerRanks.append(
                {'id': row.id, 'name': row.player_name, 'average': row.away_average, 'runs': row.away_runs, 'url': row.img_url, 'rank': result, 'category': 'Away'})

        playerRanks = sorted(
            playerRanks, key=lambda x: x['rank'], reverse=True)
        playerRankData['playerRankings'] = playerRanks

        row = player_data.query.filter_by(id=selectedPlayerId).first()
        result = overallPredict(row)
        selectedPlayerData = [row.id, row.player_name,
                              row.away_average, row.away_runs, row.img_url, result, 'Away']
        Recommendation(selectedPlayerData, playerRanks)

def Recommendation(selectedPlayerData,playerRanks):

    global playerRankData

    for idx, data in enumerate(playerRanks):
        if idx==0 and selectedPlayerData[5] >= data['rank']:
            playerRankData['Rec'] = [{'id': selectedPlayerData[0], 'name': selectedPlayerData[1],
                                      'average': selectedPlayerData[2], 'runs': selectedPlayerData[3], 'url': selectedPlayerData[4], 'rank': selectedPlayerData[5], 'category': selectedPlayerData[6]}, data]
            break
        elif selectedPlayerData[5] >= data['rank']:
            if abs(selectedPlayerData[5]-data['rank']) < abs(selectedPlayerData[5]-playerRanks[idx-1]['rank']):
                playerRankData['Rec'] = [{'id': selectedPlayerData[0], 'name': selectedPlayerData[1],
                                          'average': selectedPlayerData[2], 'runs': selectedPlayerData[3], 'url': selectedPlayerData[4], 'rank': selectedPlayerData[5], 'category': selectedPlayerData[6]}, data]
            else:
                playerRankData['Rec'] = [{'id': selectedPlayerData[0], 'name': selectedPlayerData[1],
                                      'average': selectedPlayerData[2], 'runs': selectedPlayerData[3], 'url': selectedPlayerData[4], 'rank': selectedPlayerData[5], 'category': selectedPlayerData[6]}, playerRanks[idx-1]]
            break
        elif idx == len(playerRanks)-1:
            playerRankData['Rec'] = [{'id': selectedPlayerData[0], 'name': selectedPlayerData[1],
                                      'average': selectedPlayerData[2], 'runs': selectedPlayerData[3], 'url': selectedPlayerData[4], 'rank': selectedPlayerData[5], 'category': selectedPlayerData[6]}, data]
            break

@app.route('/Rec-3', methods=['GET'])
def RankImages_rec3():
    x = {'name':'arushan','id': [3,6,2,56], 'email': 'x@gmail'}
    return jsonify(playerRankData)

def overallPredict(row):
    data = {'overall_innings': [row.overall_innings], 'overall_runs': [row.overall_runs],
            'overall_notout': [row.overall_notout], 'balls': [row.balls], 'centuries': [row.centuries],
            'fifties': [row.fifties], 'thirties': [row.thirties], 'zeros': [row.zeros],
            'overall_average': [row.overall_average], 'strike_rate': [row.strike_rate]}
    df = pd.DataFrame(data)
    test = df[["overall_innings", "overall_runs", "overall_notout", "balls",
               "centuries", "fifties", "thirties", "zeros", "overall_average", "strike_rate"]]
    
    result = Overall.predict(test)
    return round(float(result[0]))

def RecentPredict(row):
    data = {'form_innings': [row.form_innings], 'form_runs': [row.form_runs],
            'recent_not_outs': [row.recent_not_outs], 'recent_100s': [row.recent_100s], 'recent_50s': [row.recent_50s],
            'recent_30s': [row.recent_30s], 'recent_zeros': [row.recent_zeros], 'form_average': [row.form_average]}
    df = pd.DataFrame(data)
    test = df[['form_innings', 'form_runs', 'recent_not_outs', 'recent_100s', 'recent_50s', 'recent_30s', 'recent_zeros', 'form_average']]
    
    result = Recent.predict(test)
    return round(float(result[0]))

def HomePredict(row):
    data = {'home_innings': [row.home_innings], 'home_runs': [row.home_runs],
            'home_not_out_count': [row.home_not_out_count], 'home_100s': [row.home_100s], 'home_50s': [row.home_50s],
            'home_30s': [row.home_30s], 'home_zeros': [row.home_zeros], 'home_average': [row.home_average]}
    df = pd.DataFrame(data)
    test = df[['home_innings', 'home_runs', 'home_not_out_count', 'home_100s',
               'home_50s', 'home_30s', 'home_zeros', 'home_average']]
    
    result = Home.predict(test)
    return round(float(result[0]))


def AwayPredict(row):
    data = {'away_innings': [row.away_innings], 'away_runs': [row.away_runs],
            'away_not_out_count': [row.away_not_out_count], 'away_100s': [row.away_100s], 'away_50s': [row.away_50s],
            'away_30s': [row.away_30s], 'away_zeros': [row.away_zeros], 'away_average': [row.away_average]}
    df = pd.DataFrame(data)
    test = df[['away_innings', 'away_runs', 'away_not_out_count', 'away_100s',
               'away_50s', 'away_30s', 'away_zeros', 'away_average']]
    
    result = Away.predict(test)
    return round(float(result[0]))

if __name__ == "__main__":
       
    app.run(debug=True)
