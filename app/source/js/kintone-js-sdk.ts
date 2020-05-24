// kintone JS SDK
const kintoneJSSDK = require('@kintone/kintone-js-sdk')

/**
 * レコード1件取得
 */
export const getRecord = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().getRecord()')
  const result = await new kintoneJSSDK.Record().getRecord({
    app: appId,
    id: 1,
  })
  console.log(result)

  return result
}

/**
 * レコード複数取得
 */
export const getRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().getRecords()')
  const result = await new kintoneJSSDK.Record().getRecords({
    app: appId,
    fields: ['レコード番号', '確度', '会社名'],
    query: '確度 in ("A") order by レコード番号 asc',
  })
  console.log(result)

  return result
}

/**
 * レコード一括読取得
 */
export const getAllRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().getAllRecordsByQuery()')
  const result = await new kintoneJSSDK.Record().getAllRecordsByQuery({
    app: appId,
    fields: ['レコード番号', '確度', '会社名'],
    query: '確度 in ("A") order by レコード番号 asc',
  })
  console.log(result)

  return result
}

/**
 * レコード一括取得（カーソル）
 */
export const getAllRecordsWithCursor = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().getAllRecordsByCursor()')
  const result = await new kintoneJSSDK.Record().getAllRecordsByCursor({
    app: appId,
    fields: ['レコード番号', '確度', '会社名'],
    query: '確度 in ("A") order by レコード番号 asc',
  })
  console.log(result)

  return result
}

/**
 * レコード1件登録
 */
export const addRecord = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().addRecord()')
  const result = await new kintoneJSSDK.Record().addRecord({
    app: appId,
    record: { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hogefugapiyo' } },
  })
  console.log(result)

  return result
}

/**
 * レコード複数登録
 */
export const addRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().addRecords()')
  const result = await new kintoneJSSDK.Record().addRecords({
    app: appId,
    records: [
      { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hoge' } },
      { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hogehoge' } },
      { 確度: { value: 'B' }, 会社名: { value: 'kjssdk-fuga' } },
      { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-fugafuga' } },
      { 確度: { value: 'C' }, 会社名: { value: 'kjssdk-piyo' } },
    ],
  })
  console.log(result)

  return result
}

/**
 * レコード一括登録
 */
export const addAllRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().addAllRecords()')
  const result = await new kintoneJSSDK.Record().addAllRecords({
    app: appId,
    records: [
      { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hoge' } },
      { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hogehoge' } },
      { 確度: { value: 'B' }, 会社名: { value: 'kjssdk-fuga' } },
      { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-fugafuga' } },
      { 確度: { value: 'C' }, 会社名: { value: 'kjssdk-piyo' } },
    ],
  })
  console.log(result)

  return result
}

/**
 * レコード1件更新
 */
export const updateRecord = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().updateRecordByID()')
  const result = await new kintoneJSSDK.Record().updateRecordByID({
    app: appId,
    id: 1,
    record: {
      確度: { value: 'B' },
      会社名: { value: 'kjssdk-hogefugapiyo!!' },
    },
  })
  console.log(result)

  return result
}

/**
 * レコード複数更新
 */
export const updateRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().updateRecords()')
  const result = await new kintoneJSSDK.Record().updateRecords({
    app: appId,
    id: 1,
    records: [
      {
        id: 2,
        record: { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hoge' } },
      },
      {
        id: 3,
        record: { 確度: { value: 'B' }, 会社名: { value: 'kjssdk-fuga' } },
      },
      {
        id: 4,
        record: { 確度: { value: 'C' }, 会社名: { value: 'kjssdk-piyo' } },
      },
    ],
  })
  console.log(result)

  return result
}

/**
 * レコード一括更新
 */
export const updateAllRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().updateAllRecords()')
  const result = await new kintoneJSSDK.Record().updateAllRecords({
    app: appId,
    id: 1,
    records: [
      {
        id: 5,
        record: { 確度: { value: 'A' }, 会社名: { value: 'kjssdk-hoge' } },
      },
      {
        id: 6,
        record: { 確度: { value: 'B' }, 会社名: { value: 'kjssdk-fuga' } },
      },
      {
        id: 7,
        record: { 確度: { value: 'C' }, 会社名: { value: 'kjssdk-piyo' } },
      },
    ],
  })
  console.log(result)

  return result
}

/**
 * レコード複数削除
 */
export const deleteRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().deleteRecords()')

  // いったんレコード複数登録
  const addResult = await addRecords(appId)
  console.log(addResult)

  // 追加したレコードを削除する
  const result = await new kintoneJSSDK.Record().deleteRecords({
    app: appId,
    ids: addResult.ids,
  })
  console.log(result)

  return result
}

/**
 * レコード一括削除
 */
export const deleteAllRecords = async (appId: number) => {
  console.log('☕️ kintoneJSSDK.Record().deleteAllRecordsByQuery()')

  // いったんレコード複数登録
  const addResult = await addRecords(appId)
  console.log(addResult)

  // 追加したレコードを削除する
  const result = await new kintoneJSSDK.Record().deleteAllRecordsByQuery({
    app: appId,
    query: `レコード番号 in ("${addResult.ids.join('", "')}")`,
  })
  console.log(`レコード番号 in ("${addResult.ids.join('", "')}")`)
  console.log(result)

  return result
}
