from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:arush123@localhost:3306/cricket_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


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


def Data_input(dataset):

    for id in range(len(dataset)):
        row = dataset.loc[dataset['index'] == id]
        data = player_data(player_name=row['player_name'].to_string(index=False), team=row['team'].to_string(index=False), overall_innings=row['overall_innings'].to_string(index=False), overall_runs=row['overall_runs'].to_string(index=False), overall_notout=row['overall_notout'].to_string(index=False), balls=row['balls'].to_string(index=False), centuries=row['centuries'].to_string(index=False), fifties=row['fifties'].to_string(index=False), thirties=row['thirties'].to_string(index=False), zeros=row['zeros'].to_string(index=False), overall_average=row['overall_average'].to_string(index=False), strike_rate=row['strike_rate'].to_string(index=False), form_innings=row['form_innings'].to_string(index=False), form_runs=row['form_runs'].to_string(index=False), recent_not_outs=row['recent_not_outs'].to_string(index=False), recent_100s=row['recent_100s'].to_string(index=False), recent_50s=row['recent_50s'].to_string(index=False), recent_30s=row['recent_30s'].to_string(index=False), recent_zeros=row['recent_zeros'].to_string(index=False), form_average=row['form_average'].to_string(index=False), home_innings=row['home_innings'].to_string(index=False), home_runs=row['home_runs'].to_string(index=False), home_not_out_count=row['home_not_out_count'].to_string(index=False), home_100s=row['home_100s'].to_string(index=False), home_50s=row['home_50s'].to_string(index=False), home_30s=row['home_30s'].to_string(index=False), home_zeros=row['home_zeros'].to_string(index=False), home_average=row['home_average'].to_string(index=False), away_innings=row['away_innings'].to_string(index=False), away_runs=row['away_runs'].to_string(index=False), away_not_out_count=row['away_not_out_count'].to_string(index=False), away_100s=row['away_100s'].to_string(index=False), away_50s=row['away_50s'].to_string(index=False), away_30s=row['away_30s'].to_string(index=False), away_zeros=row['away_zeros'].to_string(index=False), away_average=row['away_average'].to_string(index=False), img_url=row['img_url'].to_string(index=False)
                           )
        db.session.add(data)
        db.session.commit()


if __name__ == "__main__":
    dataset = pd.read_csv(
        r'E:\4thYear\FYP_THINGS\New folder\Cricket Bid\Cricket Bid\Database Creation\Updated.csv')
    
# D:\Disk_4\Projects\Cricket auction\db creation\Updated.csv
    with app.app_context():
        db.create_all()
        Data_input(dataset)
