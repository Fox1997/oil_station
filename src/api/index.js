import request from './request'

// 请求 token
export const reqToken = () => request('/api/tokens', {}, 'POST')

// 获取category（场景）"data": [{code,name,name_cn}]
export const reqCategory = () => request('/query/categories')

// 获取便服务分(4)
export const reqServerScore = params => request('/compute/service/score', params)

// 获取效率分(4)
export const reqEfficientScore = params => request('/compute/efficiency/score', params)

// 获取安全分(4)
export const reqSecurityScore = params => request('/compute/security/score', params)

// 获取管理分(4)
export const reqManageScore = params => request('/compute/management/score', params)

// 便利店
// 双手接递次数(没实现)
export const reqDoubleHandsCount = params => request('/compute/checkout/double_hand_count', params)

// 单手接递次数(没实现)
export const reqSingleHandCount = params => request('/compute/checkout/single_hand_count', params)

// 进店次数(1)
export const reqEnterCount = params => request('/compute/checkout/enter_count', params)

// 违规操作pos机次数(1)
export const reqILLegalPosCount = params => request('/compute/checkout/illegal_pos_count', params)

// 排队人数超限次数(1)
export const reqLongQueueCount = params => request('/compute/checkout/long_queue_count', params)

// 服务超时次数(1)
export const reqServiceTimeoutCount = params => request('/compute/checkout/service_timeout_count', params)

// 扫码次数(没实现)
export const reqScanCount = params => request('/compute/checkout/scaning_count', params)

// 获取总事件次数（2）
export const reqEventCount = params => request('/compute/event_log/count', params)

// 获取总违规率(2)
export const reqIllegalRatio = params => request('/compute/security/ratio', params)

// 获取总违规次数(2)
export const reqIllegalEventsCount = params => request('/compute/event_log/illegal_count', params)

// 服务人次(5)
export const reqServiceCount = params => request('/compute/checkout/service_count', params)

// 平均服务时间(5)
export const reqServiceTime = params => request('/compute/checkout/service_average_time', params)

// 平均加油时间(5)
export const reqAvarageRefuelTime = params => request('/compute/refuel/service_average_time', params)

// 服务车辆数(5)
export const reqServiceCarCount = params => request('/compute/refuel/service_count', params)

// 轻度违规次数(3)
export const reqLightIllegalCount = params => request('/compute/security/light_illegal', params)

// 中度违规次数(3)
export const reqModerateIllegalCout = params => request('/compute/security/moderate_illegal', params)

// 重度违规次数(3)
export const reqSeriousIllegalCout = params => request('/compute/security/serious_illegal', params)

// 卸油次数(9)
export const reqUnloadCount = params => request('/compute/unload/operation_count', params)

// 卸油区管理分(9)
export const reqUnloadScore = params => request('/compute/unload/management_score', params)

// 卸油区巡检次数(9)
export const reqUnloadInspect = params => request('/compute/unload/inspect_count', params)

// 经理出现次数
export const reqManageCount = params => request('/compute/manager/count', params)

// 卸油区入侵次数 (9)
export const reqUnloadInvade = params => request('/compute/unload/invade_count', params)

// 未关防盗门次数（7）
export const reqNotCloseDoor = params => request('/compute/safebox/door_not_closed_count', params)

// 离开时间过长（7）
export const reqLeaveTimeOut = params => request('/compute/safebox/leave_timeout_count', params)

// 开启保险柜（7）
export const reqOpenSafeBox = params => request('/compute/safebox/open_safe_count', params)

// 出现非工作人员（7）
export const reqNotStaff = params => request('/compute/safebox/not_staff_count', params)

// 开启钱箱（7）
export const reqOpenBox = params => request('/compute/safebox/open_box_count', params)

// 人数不足（7）
export const reqStaffNotEnough = params => request('/compute/safebox/staff_not_enough_count', params)

// 违规率
// export const reqIllegalRatio = params => request('/compute/security/ratio', params)
// 拥挤指数(6)
export const reqConIndex = params => request('/compute/refuel/congestion_index', params)

// 经理再站率（6）
export const reqManageRatio = params => request('/compute/manager/ratio', params)

// 服务率(6)
export const reqServiceRatio = params => request('/compute/checkout/service_ratio', params)

// 加油区巡检次数 (6)
export const reqRefuelInspect = params => request('/compute/refuel/inspect_count', params)

// 请求事件定义：包括事件代码、事件名称等
export const reqEventsDefine = () => request('/query/events')

// 请求违规等级定义：包括等级代码、等级名称
export const reqLevelsDefine = () => request('/query/levels')
