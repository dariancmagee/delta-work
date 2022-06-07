from flask import Flask
import csv

app = Flask(__name__)

# Flights API Route
@app.route("/flights")
def flights():
    return {"flights": ["city1", "city2", "city3"]}


if __name__ == "__main__":
    app.run(debug=True)