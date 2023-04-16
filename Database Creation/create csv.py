import pandas as pd

input_file = r"E:\4thYear\FYP_THINGS\New folder\Cricket Bid\Cricket Bid\Database Creation\Player_Points_Stored.csv"
output_file = r"E:\4thYear\FYP_THINGS\New folder\Cricket Bid\Cricket Bid\Database Creation\Updated.csv"

df = pd.read_csv(input_file)

filtered_df = df[(df['overall_innings'] >= 10)]

filtered_df.to_csv(output_file, index=False)
