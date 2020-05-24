// @kintone/rest-api-client
import { KintoneRestAPIClient } from '@kintone/rest-api-client'

/**
 * レコード1件取得
 */
export const getRecord = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.getRecord()')
  const result = await new KintoneRestAPIClient().record.getRecord({
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
  console.log('🍜 KintoneRestAPIClient().record.getRecords()')
  const result = await new KintoneRestAPIClient().record.getRecords({
    app: appId,
    fields: ['レコード番号', '確度', '会社名'],
    query: '確度 in ("A") order by レコード番号 asc',
  })
  console.log(result)

  return result
}

/**
 * レコード一括取得
 */
export const getAllRecords = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.getAllRecords()')
  const result = await new KintoneRestAPIClient().record.getAllRecords({
    app: appId,
    fields: ['レコード番号', '確度', '会社名'],
    condition: '確度 in ("A")',
    orderBy: 'レコード番号 asc',
  })
  console.log(result)

  return result
}

/**
 * レコード一括取得（カーソル）
 */
export const getAllRecordsWithCursor = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.getAllRecordsWithCursor()')
  const result = await new KintoneRestAPIClient().record.getAllRecordsWithCursor(
    {
      app: appId,
      fields: ['レコード番号', '確度', '会社名'],
      query: '確度 in ("A") order by レコード番号 asc',
    }
  )
  console.log(result)

  return result
}

/**
 * レコード1件登録
 */
export const addRecord = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.addRecord()')
  const result = await new KintoneRestAPIClient().record.addRecord({
    app: appId,
    record: { 確度: { value: 'A' }, 会社名: { value: 'krac-hogefugapiyo' } },
  })
  console.log(result)

  return result
}

/**
 * レコード複数登録
 */
export const addRecords = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.addRecords()')
  const result = await new KintoneRestAPIClient().record.addRecords({
    app: appId,
    records: [
      { 確度: { value: 'A' }, 会社名: { value: 'krac-hoge' } },
      { 確度: { value: 'A' }, 会社名: { value: 'krac-hogehoge' } },
      { 確度: { value: 'B' }, 会社名: { value: 'krac-fuga' } },
      { 確度: { value: 'A' }, 会社名: { value: 'krac-fugafuga' } },
      { 確度: { value: 'C' }, 会社名: { value: 'krac-piyo' } },
    ],
  })
  console.log(result)

  return result
}

/**
 * レコード一括登録
 */
export const addAllRecords = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.addAllRecords()')
  const result = await new KintoneRestAPIClient().record.addAllRecords({
    app: appId,
    records: [
      { 確度: { value: 'A' }, 会社名: { value: 'krac-hoge' } },
      { 確度: { value: 'A' }, 会社名: { value: 'krac-hogehoge' } },
      { 確度: { value: 'B' }, 会社名: { value: 'krac-fuga' } },
      { 確度: { value: 'A' }, 会社名: { value: 'krac-fugafuga' } },
      { 確度: { value: 'C' }, 会社名: { value: 'krac-piyo' } },
    ],
  })
  console.log(result)

  return result
}

/**
 * レコード1件更新
 */
export const updateRecord = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.updateRecord()')
  const result = await new KintoneRestAPIClient().record.updateRecord({
    app: appId,
    id: 11,
    record: { 確度: { value: 'B' }, 会社名: { value: 'krac-hogefugapiyo!!' } },
  })
  console.log(result)

  return result
}

/**
 * レコード複数更新
 */
export const updateRecords = async (appId: number) => {
  console.log('🍜 KintoneRestAPIClient().record.updateRecords()')
  const result = await new KintoneRestAPIClient().record.updateRecords({
    app: appId,
    records: [
      {
        id: 12,
        record: { 確度: { value: 'A' }, 会社名: { value: 'krac-hoge' } },
      },
      {
        id: 13,
        record: { 確度: { value: 'B' }, 会社名: { value: 'krac-fuga' } },
      },
      {
        id: 14,
        record: { 確度: { value: 'C' }, 会社名: { value: 'krac-piyo' } },
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
  console.log('🍜 KintoneRestAPIClient().record.updateAllRecords()')
  const result = await new KintoneRestAPIClient().record.updateAllRecords({
    app: appId,
    records: [
      {
        id: 15,
        record: { 確度: { value: 'A' }, 会社名: { value: 'krac-hoge' } },
      },
      {
        id: 16,
        record: { 確度: { value: 'B' }, 会社名: { value: 'krac-fuga' } },
      },
      {
        id: 17,
        record: { 確度: { value: 'C' }, 会社名: { value: 'krac-piyo' } },
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
  console.log('🍜 KintoneRestAPIClient().record.deleteRecords()')

  // いったんレコード複数登録
  const addResult = await addRecords(appId)
  console.log(addResult)

  // 追加したレコードを削除する
  const result = await new KintoneRestAPIClient().record.deleteRecords({
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
  console.log('🍜 KintoneRestAPIClient().record.deleteAllRecords()')

  // いったんレコード複数登録
  const addResult = await addRecords(appId)
  console.log(addResult)

  // 追加したレコードを削除する
  const result = await new KintoneRestAPIClient().record.deleteAllRecords({
    app: appId,
    records: addResult.records,
  })
  console.log(result)

  return result
}
