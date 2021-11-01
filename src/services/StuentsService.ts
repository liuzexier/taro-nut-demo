import { postJson } from "@/utils";

export interface StudentQuery extends PageQuery {
  data: {
    username?: ''
  }
}
export function getStudentsList(data: StudentQuery) {
  return postJson('/sdfsdf/', data)
}