import pytest
from app import app
import json


@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()

    yield client


def test_bias_report(client):
    """Start with a blank database."""

    rv = client.post('/demo/bias_report', data=dict(
        dataset='german',
        protected_attributes=['sex']
    ))
    assert 'metrics' in json.loads(rv.data)['results'][0]
