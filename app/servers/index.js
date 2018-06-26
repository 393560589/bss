import {get} from '../utils/axios'
import { API } from '../config/keyword'
export const getcode=()=>{
    return get(API.code)
}