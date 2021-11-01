export function commonRules(prop: string, tigger?: any, validator?: any) {
  const rules: any[] = [
    {
      required: true,
      message: '请输入' + prop,
      trigger: tigger || 'blur',
    }
  ]
  if (validator && typeof validator === 'function') {
    rules.push({
      validator,
      trigger: tigger || 'blur'
    })
  }
  return rules
}