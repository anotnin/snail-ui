---
group:
  title: 样式
  order: 2
---

# color

## 文字颜色

```tsx
import React from 'react';
import '../../src/index.ts';

export default () => {
  const name = [
    'text-red',
    'text-orange',
    'text-yellow',
    'text-olive',
    'text-green',
    'text-cyan',
    'text-blue',
    'text-purple',
    'text-mauve',
    'text-pink',
    'text-brown',
    'text-grey',
    'text-gray',
    'text-black',
    'text-white',
  ];

  return (
    <div className={'flex flex-wrap'}>
      {name.map((item, index) => {
        return (
          <div className={`${item} padding-sm margin`} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
```

其中还包含 `text-white`

## 背景颜色

可搭配 `{颜色}`-shadow 使用，背景色相对应的文本色也已经配好

### 默认背景色

```tsx
import React from 'react';
import '../../src/index.ts';

export default () => {
  const name = [
    'bg-red',
    'bg-orange',
    'bg-yellow',
    'bg-olive',
    'bg-green',
    'bg-cyan',
    'bg-blue',
    'bg-purple',
    'bg-mauve',
    'bg-pink',
    'bg-brown',
    'bg-grey',
    'bg-gray',
    'bg-black',
    'bg-white',
  ];

  return (
    <div className={'flex flex-wrap'}>
      {name.map((item, index) => {
        return (
          <div className={`${item} padding-sm margin-sm  basis-xs`} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
```

### 推荐渐变色

```tsx
import React from 'react';
import '../../src/index.ts';

export default () => {
  const light = [
    'bg-gradual-orange',
    'bg-gradual-green',
    'bg-gradual-purple',
    'bg-gradual-pink',
    'bg-gradual-blue',
  ];

  return (
    <div className={'flex flex-wrap'}>
      {light.map((item, index) => {
        return (
          <div className={`${item} padding-sm margin-sm  basis-xs`} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
```
