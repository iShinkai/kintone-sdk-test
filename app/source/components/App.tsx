import { Button, Dropdown } from '@kintone/kintone-ui-component'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// 関数
import * as kjssdk from '../js/kintone-js-sdk'
import * as krac from '../js/kintone-rest-api-client'

export default class App extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props)

    // リスト定義
    const items = [
      {
        label: 'レコード1件取得',
        value: 'getRecord',
        func1: kjssdk.getRecord,
        func2: krac.getRecord,
      },
      {
        label: 'レコード複数取得',
        value: 'getRecords',
        func1: kjssdk.getRecords,
        func2: krac.getRecords,
      },
      {
        label: 'レコード一括取得（クエリ）',
        value: 'getAllRecords',
        func1: kjssdk.getAllRecords,
        func2: krac.getAllRecords,
      },
      {
        label: 'レコード一括取得（カーソル）',
        value: 'getAllRecordsWitcCursor',
        func1: kjssdk.getAllRecordsWithCursor,
        func2: krac.getAllRecordsWithCursor,
      },
      {
        label: 'レコード1件登録',
        value: 'addRecord',
        func1: kjssdk.addRecord,
        func2: krac.addRecord,
      },
      {
        label: 'レコード複数登録',
        value: 'addRecords',
        func1: kjssdk.addRecords,
        func2: krac.addRecords,
      },
      {
        label: 'レコード一括登録',
        value: 'addAllRecords',
        func1: kjssdk.addAllRecords,
        func2: krac.addAllRecords,
      },
      {
        label: 'レコード1件更新',
        value: 'updateRecord',
        func1: kjssdk.updateRecord,
        func2: krac.updateRecord,
      },
      {
        label: 'レコード複数更新',
        value: 'updateRecords',
        func1: kjssdk.updateRecords,
        func2: krac.updateRecords,
      },
      {
        label: 'レコード一括更新',
        value: 'updateAllRecords',
        func1: kjssdk.updateAllRecords,
        func2: krac.updateAllRecords,
      },
      {
        label: 'レコード複数削除',
        value: 'deleteRecords',
        func1: kjssdk.deleteRecords,
        func2: krac.deleteRecords,
      },
      {
        label: 'レコード一括削除',
        value: 'deleteAllRecords',
        func1: kjssdk.deleteAllRecords,
        func2: krac.deleteAllRecords,
      },
    ]
    this.state = {
      items: items,
      value: 'getRecord',
      func1: kjssdk.getRecord,
      func2: krac.getRecord,
      appId: Number(kintone.app.getId()),
    }
  }

  // リスト選択時処理
  handleChange = (value) => {
    console.log(value)
    const { func1, func2 } = this.state.items.find((i) => i.value === value)
    this.setState({ value, func1, func2 })
  }

  // 実行ボタンクリック時処理
  handleClick = async () => {
    const appId = this.state.appId
    const res1 = await this.state.func1(appId)
    const res2 = await this.state.func2(appId)
  }

  // レンダリング
  render() {
    return (
      <div style={{ display: 'flex', height: 50, alignItems: 'flex-start' }}>
        <Dropdown
          items={this.state.items}
          value={this.state.value}
          onChange={(value) => {
            this.handleChange(value)
          }}
        />
        <Button
          text="実行"
          type="submit"
          isDisabled={false}
          isVisible={true}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}
