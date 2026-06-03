import os
import pymongo
from dotenv import load_dotenv

# Load the environment variables from the web folder's .env.local
env_path = os.path.join(os.path.dirname(__file__), '../../web/.env.local')
load_dotenv(dotenv_path=env_path)

class MongoPipeline:
    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=os.getenv('MONGODB_URI', 'mongodb://localhost:27017/tuition_db'),
            mongo_db='test' # The default DB name if not specified in URI
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        # Insert the scraped centre into MongoDB
        # Note: In a real environment, you'd check for duplicates
        self.db['tuitioncentres'].insert_one(dict(item))
        return item
