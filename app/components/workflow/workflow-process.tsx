import type { WorkflowProcess } from '@/types/app'

interface WorkflowProcessProps {
  data: WorkflowProcess
  grayBg?: boolean
  expand?: boolean
  hideInfo?: boolean
}

const WorkflowProcessItem = (_props: WorkflowProcessProps) => {
  // Hide workflow process UI
  return null
}

export default WorkflowProcessItem
