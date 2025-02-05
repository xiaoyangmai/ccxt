// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicGetOrderbook (params?: {}): Promise<implicitReturnType>;
    publicGetTicker (params?: {}): Promise<implicitReturnType>;
    publicGetTrades (params?: {}): Promise<implicitReturnType>;
    publicGetServerExchangeinfo (params?: {}): Promise<implicitReturnType>;
    privateGetUsersBalances (params?: {}): Promise<implicitReturnType>;
    privateGetOpenOrders (params?: {}): Promise<implicitReturnType>;
    privateGetAllOrders (params?: {}): Promise<implicitReturnType>;
    privateGetUsersTransactionsTrade (params?: {}): Promise<implicitReturnType>;
    privatePostOrder (params?: {}): Promise<implicitReturnType>;
    privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
    privateDeleteOrder (params?: {}): Promise<implicitReturnType>;
    graphGetOhlcs (params?: {}): Promise<implicitReturnType>;
    graphGetKlinesHistory (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange