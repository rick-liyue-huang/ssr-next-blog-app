
import getConfig from "next/config";


const {publicRuntimeConfig} = getConfig();

// TODO
export const API = publicRuntimeConfig.PRODUCTION ?
	'http://ssrblog.com' :
	'http://localhost:8080'
export const APP_NAME = publicRuntimeConfig.APP_NAME
