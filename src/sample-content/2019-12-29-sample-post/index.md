---
title: "Neuer Webauftritt des HIAI"
author: marcellspies
date: 2020-08-16
coverImage: ./images/sample.png
---

# Heading 1

Welcome!

## Heading 1.1

That's a silly sample entry with an image.

![Some image](./images/sample.png)

## Heading 1.2

Some other content.

### Sample Code

#### C#-Sample

```csharp
using System;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, world!");
    }
}
```

#### JavaScript-Sample

```js
function msg(){  
  alert("Hello Javatpoint");
}
```

#### TSX-Sample

```tsx
/// <reference path="../typings/bundle.d.ts" />

import * as React from 'react';
import {TodoItem} from './todoItem';

interface ITodo {
    description: string;
    key: number;
}

export interface IMainState {
    newItem?: {
        description: string;
    };
    todoList?: ITodo[];
}

export interface IMainProps {}

export class Main extends React.Component<IMainProps, IMainState> {

    state: IMainState = {newItem: {description: ''}, todoList: []}

    constructor () {
        super();
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeName (e: any) {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    }

    addItem () {
        var list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: new Date().getTime()
        });
        this.setState({
            todoList: list,
            newItem: {description: ''}
        });
    }

    removeItem (item: ITodo) {
        var list = this.state.todoList.filter(i => i.key !== item.key);
        this.setState({todoList: list});
    }

    render () {
        var todoItems = this.state.todoList.map(item => {
            return <TodoItem key={item.key} item={item} onRemove={this.removeItem} ></TodoItem>;
        });
        return (
            <div>
                <div>
                    <input type="text" placeholder="input new item" value={this.state.newItem.description} onChange={this.changeName} />
                    <button onClick={this.addItem} >add</button>
                </div>
                <ul>{todoItems}</ul>
            </div>
        );
    }
}
```