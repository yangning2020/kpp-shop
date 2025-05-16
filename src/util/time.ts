import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';

dayjs.locale('zh-tw');
export function getDisplayTime(time: string | Date) {
  const date = dayjs(time);

  // 同天
  if (date.isSame(dayjs(), 'day')) {
    return date.format('HH:mm');
  }
  // 昨天
  else if (date.isSame(dayjs().subtract(1, 'day'), 'day')) {
    return '昨天 ' + date.format('HH:mm');
  }
  // 同周
  else if (date.isSame(dayjs(), 'week')) {
    return date.format('dddd HH:mm');
  }
  // 同年
  else if (date.isSame(dayjs(), 'year')) {
    return date.format('MM-DD HH:mm');
  }
  // 更早
  else {
    return date.format('YYYY-MM-DD HH:mm');
  }
}
