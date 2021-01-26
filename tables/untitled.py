import pandas as pd
import sqlite3
import os


directory = os.getcwd()
for filename in os.listdir(directory):
	if filename.endswith(".csv"):
		# print(filename[:-4])
		df = pd.read_csv(filename)
		df.columns = df.columns.str.strip()
		con = sqlite3.connect(directory + '/testing.db')
		df.to_sql(filename[:-4], con, if_exists='replace', index=False)
		con.close()



# # load data
# df = pd.read_csv('trial.csv')

# # strip whitespace from headers
# df.columns = df.columns.str.strip()

# con = sqlite3.connect("testing.db")

# # drop data into database
# df.to_sql("trial", con, if_exists='replace', index=False)

# con.close()