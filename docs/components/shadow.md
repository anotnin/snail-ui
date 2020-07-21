---
group:
  title: 样式
  order: 102
---

## shadow

### 默认阴影

```tsx
import React from 'react';
import '../../src/index.ts';

export default () => {
  const name = [
    'shadow-red',
    'shadow-orange',
    'shadow-yellow',
    'shadow-olive',
    'shadow-green',
    'shadow-cyan',
    'shadow-blue',
    'shadow-purple',
    'shadow-mauve',
    'shadow-pink',
    'shadow-brown',
    'shadow-grey',
    'shadow-gray',
    'shadow-black',
    'shadow-white',
  ];

  return (
    <div className={'flex flex-wrap'}>
      {name.map((item, index) => {
        return (
          <div className={`${item} padding-sm margin basic-xs`} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
```

### 文字阴影

```tsx
import React from 'react';
import '../../src/index.ts';

export default () => {
  const name = [
    'text-shadow-red',
    'text-shadow-orange',
    'text-shadow-yellow',
    'text-shadow-olive',
    'text-shadow-green',
    'text-shadow-cyan',
    'text-shadow-blue',
    'text-shadow-purple',
    'text-shadow-mauve',
    'text-shadow-pink',
    'text-shadow-brown',
    'text-shadow-grey',
    'text-shadow-gray',
    'text-shadow-black',
    'text-shadow-white',
  ];

  return (
    <div className={'flex flex-wrap'}>
      {name.map((item, index) => {
        return (
          <div className={`${item} padding-sm margin basic-xs`} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
```
