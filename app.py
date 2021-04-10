from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__, static_folder='./build', static_url_path='/')
api = Api(app)
import requests
from random import randint
import json
from config import token_secret



headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
    
@app.route('/')
def index():
    return app.send_static_file('index.html')

class SearchTweet(Resource):
    def get(self, tweet):
        headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}
        payload = {'q':tweet, 'result_type':'mixed', 'count': 5}
        searchTweet = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()
        return jsonify(searchTweet)

api.add_resource(SearchTweet, '/api/searchtweet/<string:tweet>')


class SearchUser(Resource):
    def get(self, user):
        headers = {'Authorization': token_secret, 'Accept' : 'application/json', 'Content-Type':'application/json'}
        payload = {'q':'from:' + user, 'result_type':'recent', 'count': 5}
        searchUser = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()        
        return jsonify(searchUser)

api.add_resource(SearchUser, '/api/searchuser/<string:user>')


class RandomTweet(Resource):
    def get(self, user):
        payload6 = {'q': 'from:' + user, 
        'result_type': 'recent',
        'count': 20}
        results = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload6, headers=headers).json()
        number = randint(1, 20)
        return jsonify(results['statuses'][number])

api.add_resource(RandomTweet, '/api/random-tweet/<string:user>')

if __name__=="__main__":
    app.run(debug=True)


