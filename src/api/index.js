import request from './request'

// 请求 token
export const reqToken = () => request('/api/tokens', {}, 'POST')

// 获取category（场景）"data": [{code,name,name_cn}]
export const reqCategory = () => request('/query/categories')

// 获取便服务分(main4)
export const reqServerScore = params => request('/compute/service/score', params)

// 获取效率分(main4)
export const reqEfficientScore = params => request('/compute/efficiency/score', params)

// 获取安全分(main4)
export const reqSecurityScore = params => request('/compute/security/score', params)

// 获取管理分(main4)
export const reqManageScore = params => request('/compute/management/score', params)

// 便利店
// 便利店服务分
export const reqCheckOutServerScore = params => request('/compute/checkout/service_score', params)

// 双手接递次数(没实现)
export const reqDoubleHandsCount = params => request('/compute/checkout/double_hand_count', params)

// 单手接递次数(没实现)
export const reqSingleHandCount = params => request('/compute/checkout/single_hand_count', params)

// 进店次数(main1)
export const reqEnterCount = params => request('/compute/checkout/enter_count', params)

// 违规操作pos机次数(main1)
export const reqILLegalPosCount = params => request('/compute/checkout/illegal_pos_count', params)

// 排队人数超限次数(main1)
export const reqLongQueueCount = params => request('/compute/checkout/long_queue_count', params)

// 服务超时次数(main1)
export const reqServiceTimeoutCount = params => request('/compute/checkout/service_timeout_count', params)

// 扫码次数(没实现)
export const reqScanCount = params => request('/compute/checkout/scaning_count', params)

// 获取总事件次数（main2）
export const reqEventCount = params => request('/compute/event_log/count', params)

// 获取总违规率(main2)
export const reqIllegalRatio = params => request('/compute/security/ratio', params)

// 获取总违规次数(main2)
export const reqIllegalEventsCount = params => request('/compute/event_log/illegal_count', params)

// 服务人次(main5)
export const reqServiceCount = params => request('/compute/checkout/service_count', params)

// 平均服务时间(main5)
export const reqServiceTime = params => request('/compute/checkout/service_average_time', params)

// 平均加油时间(main5)
export const reqAvarageRefuelTime = params => request('/compute/refuel/service_average_time', params)

// 服务车辆数(main5)
export const reqServiceCarCount = params => request('/compute/refuel/service_count', params)

// 等待超时
export const reqRefuelTimeOut = params => request('/compute/refuel/wait_timeout_count', params)

// 轻度违规次数(main3)
export const reqLightIllegalCount = params => request('/compute/security/light_illegal', params)

// 中度违规次数(main3)
export const reqModerateIllegalCout = params => request('/compute/security/moderate_illegal', params)

// 重度违规次数(main3)
export const reqSeriousIllegalCout = params => request('/compute/security/serious_illegal', params)

// 卸油次数(main9)
export const reqUnloadCount = params => request('/compute/unload/operation_count', params)

// 卸油区管理分(main9)
export const reqUnloadScore = params => request('/compute/unload/management_score', params)

// 卸油区巡检次数(main9)
export const reqUnloadInspect = params => request('/compute/unload/inspect_count', params)

// 经理出现次数
export const reqManageCount = params => request('/compute/manager/count', params)

// 卸油区入侵次数 (main9)
export const reqUnloadInvade = params => request('/compute/unload/invade_count', params)

// 财务室管理分
export const reqSafeManageScore = params => request('/compute/safebox/management_score', params)

// 未关防盗门次数（main7）
export const reqNotCloseDoor = params => request('/compute/safebox/door_not_closed_count', params)

// 离开时间过长（main7）
export const reqLeaveTimeOut = params => request('/compute/safebox/leave_timeout_count', params)

// 开启保险柜（main7）
export const reqOpenSafeBox = params => request('/compute/safebox/open_safe_count', params)

// 出现非工作人员（main7）
export const reqNotStaff = params => request('/compute/safebox/not_staff_count', params)

// 开启钱箱（main7）
export const reqOpenBox = params => request('/compute/safebox/open_box_count', params)

// 人数不足（main7）
export const reqStaffNotEnough = params => request('/compute/safebox/staff_not_enough_count', params)

// 违规率（main6）
// export const reqIllegalRatio = params => request('/compute/security/ratio', params)
// 拥挤指数(main6)
export const reqConIndex = params => request('/compute/refuel/congestion_index', params)

// 经理再站率（main6）
export const reqManageRatio = params => request('/compute/manager/ratio', params)

// 服务率(main6)
export const reqServiceRatio = params => request('/compute/checkout/service_ratio', params)

// 加油区服务分
export const reqRefuelServiceScore = params => request('/compute/refuel/service_score', params)

// 加油区巡检次数 (main6)
export const reqRefuelInspect = params => request('/compute/refuel/inspect_count', params)

// 加油区车辆超速次数
export const reqOverSpeed = params => request('/compute/refuel/overspeed_count', params)

// 请求事件定义：包括事件代码、事件名称等
export const reqEventsDefine = () => request('/query/events')

// 请求违规等级定义：包括等级代码、等级名称
export const reqLevelsDefine = () => request('/query/levels')

// 获取综合分overview
export const reqScore = params => request('/compute/comprehensive/score', params)

// 获取平均违规程度
export const reqAvageIllLevel = params => request('/compute/security/average_level', params)

// 获取事件次数
export const reqEventsCount = params => request('/compute/event_log/count', params)

// TODO:播放详情 + 智能分析页面都涉及到的接口
// 请求所有报警事件：可以是违规的，可以是所有的
export const reqAllEvents = params => request('/query/event_log', params)

// 只请求违规事件
export const reqIllegalEvents = params => request('/query/event_log/illegal', params)

// TODO: 智能监控页面
// 请求所有视频流
export const reqStreamQuery = params => request('/live/query', params)

// 请求某一摄像头视频流
export const reqStreamPull = params => request(`/live/push/${params}`)
