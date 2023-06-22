## Overview
Implement tab index cho radio button bằng thư viện MUI

## Bug
Mở 1 form các radio button group, bấm tab để focus vào các ô radio\
**Expected**: trình duyệt focus vào từng ô radio\
**Actual**: chỉ focus đc vào 1 ô radio đầu tiên, sau đó sẽ focus vào các element khác\
**Example**: https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio \
Đã thử set tabindex cho các input radio -> ko work.

## Solution
Thay thế bằng checkbox và css lại cho giống radio button
