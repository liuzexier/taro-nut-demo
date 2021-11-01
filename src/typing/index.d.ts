
declare interface PageUtil {
  page: number,
  limit: number
}
declare interface PageQuery {
  pageUtil: PageUtil,
  data?: any
}

