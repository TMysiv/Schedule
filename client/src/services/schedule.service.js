import { axiosService } from './axios.service';

export const scheduleService = {
    getAll: () => axiosService.get().then(value => value.data),
    getById: (id) => axiosService.get(`/${id}`).then(value => value.data),
    createSchedule: (data) => axiosService.post('',data).then(value => value.data),
    updateSchedule: (id,data) => axiosService.patch(`/${id}`,data).then(value => value.data),
    deleteSchedule: (id) => axiosService.delete(`/${id}`).then(value => value.data)
};
