---
order: 1
nav:
  title: 色彩
group:
  title: 设计
  order: 2
---

# 色彩

在颜色的选择上，我们参考学习了 color-ui 的颜色体系

```tsx
import React from 'react';
import '../../../src/index.ts';

export default () => {
  const name = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'cyan',
    'blue',
    'purple',
    'mauve',
    'pink',
    'brown',
    'grey',
    'gray',
    'black',
    'white',
  ];

  return (
    <div className={'flex flex-wrap'}>
      {name.map((item, index) => {
        return (
          <div
            className={`bg-${item} padding-sm margin-sm basis-xs`}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
```

在提供了基础色域的基础上，我们对样式进行提炼后，为用户提供了方便快捷的 class 样式名称
[详情](/components/palette)
