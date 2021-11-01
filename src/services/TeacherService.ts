import { postJson } from "@/utils";

export interface TeacherQuery extends PageQuery {
  data: {
    username?: ''
  }
}
export function getStudentsList(data: TeacherQuery) {
  return postJson('/sdfsdf/', data)
}