# Name:Yarin Hazani
# ID: 313200560

from flask import Flask, request
from Settings import db_password
import requests
import mysql.connector as mysql
import json

app = Flask(__name__)

db = mysql.connect(
    host="localhost",
    user="root",
    password=db_password,
    database="blog"
)

print(db)

@app.route('/posts/<id>')

def get_post_by_id(id):
    return get_post(id)

@app.route('/posts', methods=['GET', 'POST'])

def manage_posts():
    if request.method == 'GET':
        return get_all_posts()
    else: 
        return add_post()

def add_post():
    data = request.get_json()
    query = "insert into posts (title, content, author) values (%s, %s, %s)"
    values = (data['title'], data['content'], data['author'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)

def get_post(id):
    query = "select id, title, content, author from posts where id = %s"
    values = (id, )
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    cursor.close()
    header = ['id','title','content','author']
    return json.dumps(dict(zip(header, record)))

def get_all_posts():
    query = "select id, title, content, author from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    header = ['id','title','content','author']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)

if __name__ == "__main__":
    app.run()
