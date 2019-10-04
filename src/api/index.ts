
// import qs from 'qs';
import { Md5 } from 'ts-md5/dist/md5';
import { FROM, tekey_sign } from './../config/app.config';
import axios from './resources';

export interface IFetchData {
  url: string;
  params?: any;
}

const getTekey = (params: any, timestamp: number):string => {
  const tekeyList: any[] = [];
  for (const key of Object.keys(params ? params : {})) {
    tekeyList.push(`${key}=${params[key]}`);
  }
  tekeyList.push(`tekey_sign=${tekey_sign}`)
  tekeyList.push(`timestamp=${timestamp}`);
  tekeyList.push(`from=${FROM}`);

  const token = window.localStorage.getItem('token');

  if (token) {
    tekeyList.push(`utoken=${token}`)
    tekeyList.push(`uid=${window.localStorage.getItem('uid')}`)
  }

  // 首先将键值对按照英文字母排序，再拼接成字符串
  const str: string = tekeyList.sort().join('&')
  return Md5.hashStr(str) as string
}

const getTeliduxingUrl = (apiUrl: string, getData: any): string => {
  const timestamp = Math.round((new Date()).valueOf()/1000)
  const tekey = getTekey(getData, timestamp)
  let quire = `?timestamp=${timestamp}&tekey=${tekey}&from=${FROM}`
  const token = window.localStorage.getItem('token');
  if (token) {
    quire += `&utoken=${token}&uid=${window.localStorage.getItem('uid')}`
  }
  let url = `${apiUrl}${quire}`

  for (const key of Object.keys(getData ? getData : {})) {
    url += `&${key}=${getData[key]}`
  }
  return url
}

export const getFetch = async (data: IFetchData): Promise<any> => {
  const res: any = await axios.get(getTeliduxingUrl(data.url, data.params));
  if (res.status === 0) {
    return res.data.result;
  } else {
    // tslint:disable-next-line:no-console
    console.error(res.message);
    return {};
  }
  
}

export const getPost = async (data: IFetchData): Promise<any> => {
  return await axios.post(getTeliduxingUrl(data.url, data.params.GET), data.params.POST)
}