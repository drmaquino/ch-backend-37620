import { MongoClient } from 'mongodb';
import { MONGODB_CNX_STR } from '../config.js';
import { logger } from '../logger/logger.js'

export const mongodbClient = new MongoClient(MONGODB_CNX_STR).db()
logger.info('persistencia en mongodb')