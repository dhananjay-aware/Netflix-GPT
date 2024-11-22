import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from './constants';


const genAI = new GoogleGenerativeAI(API_KEY);

export default genAI