import request from '@/utils/request';

export async function getComplexList(data) {
  return request(`/api/complex/list?locale=${data.locale}`);
}
