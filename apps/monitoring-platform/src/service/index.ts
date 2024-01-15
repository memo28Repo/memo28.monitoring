/*
 * @Author: @memo28.repo
 * @Date: 2024-01-10 23:10:25
 * @LastEditTime: 2024-01-10 23:12:48
 * @Description: 
 * @FilePath: /baseReact/src/service/index.ts
 */

import { ServiceCore, initializeConfiguration, instantiation, modules } from '@memo28/service';


@instantiation()
@modules({})
@initializeConfiguration({
    baseURL: ""
})
class Service extends ServiceCore { }

export const http = new Service().getAxios()

