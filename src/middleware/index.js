import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import logger from "./logger";


export default applyMiddleware(
    thunk,
    logger
)