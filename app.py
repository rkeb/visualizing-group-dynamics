from flask import Flask, render_template, jsonify, request
from werkzeug.contrib.cache import SimpleCache
import numpy as np


app = Flask(__name__)
if __name__ == '__main__':
      app.run(host='127.0.0.2', port=3030)
cache = SimpleCache()

# metaData = {key: {
#     'label': {
#         'column': ds.label_names[0],
#         'favorable': ds.favorable_label,
#         'unfavorable': ds.unfavorable_label,
#     },
#     'protected_attributes': {
#         'columns': ds.protected_attribute_names,
#         'privileged': [arr.tolist()[0] for arr in ds.privileged_protected_attributes],
#         'unprivileged': [arr.tolist()[0] for arr in ds.unprivileged_protected_attributes]
#     },
#     # 'feature_names': ds.feature_names
# } for key, ds in demoDS.items()}


@app.route("/")
def home():
    return render_template("viewer.html")

