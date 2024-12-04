import { IBreadcrumb } from "../app/shared/components/breadcrumb/types/breadcrumb";

export const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Trang chủ', 
    link: '/', 
    children: [
      {
        label: 'Hồ sơ người dùng', 
        link: '/profile', 
        children: [
          {
            label: 'Hồ sơ người dùng', 
            link: '/profile-info', 
          }, 
          {
            label: 'Lịch sử mua hàng', 
            link: '/profile-info', 
          }, 
        ]
      }, 
      {
        label: 'Tin tức', 
        link: '/news', 
      }, 
    ]
  }
]