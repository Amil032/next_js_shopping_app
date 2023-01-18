export const catalogItems = [
  { name: 'big', description: 'Boyuk Məişət texnikası' },
  { name: 'little', description: 'Xirda Meiset texnikasi' },
  { name: 'air', description: 'İqlim cihazlari' },
  { name: 'phone', description: 'Telefonlar' },
  { name: 'office', description: 'Ofis levazimatlari' },
  { name: 'lamp', description: 'Lampalar' },
  { name: 'other', description: 'diger' }
]
// export const catalogItems = [
//     { name: 'big', description: 'Boyuk Məişət texnikası',icon:'fa-light fa-washing-machine'},
//     { name: 'little', description: 'Xirda Meiset texnikasi' ,icon:'fa-light fa-house-building'},
//     { name: 'air', description: 'İqlim cihazlari',icon:'fa-regular fa-air-conditioner'} ,
//     { name: 'phone', description: 'Telefonlar' ,icon:'fa-solid fa-mobile'},
//     { name: 'office', description: 'Ofis levazimatlari' ,icon:'fa-solid fa-house-building'},
//     { name: 'lamp', description: 'Lampalar',icon:'fa-light fa-lamp' },
//     { name: 'other', description: 'diger' ,icon:'fa-light fa-house-building'},

// ]
export const subCategories: Categories = {
  big: [
    { name: 'refrigerator', description: 'Soyuducu' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' },
    { name: 'refrigerator', description: 'Soyuducu' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' }
  ],
  little: [
    { name: 'refrigerator', description: 'tozsoran' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' }
  ],
  air: [
    { name: 'refrigerator', description: 'blender' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' }
  ],
  phone: [
    { name: 'refrigerator', description: 'Soyuducu' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' }
  ],
  office: [
    { name: 'refrigerator', description: 'Soyuducu' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' }
  ],
  other: [
    { name: 'refrigerator', description: 'Soyuducu' },
    { name: 'dish-whasher', description: 'Qab yuyan' },
    { name: 'washing-machine', description: 'paltar yuyan' },
    { name: 'Vacuum cleaner', description: 'Qab yuyan' }
  ]
}
export interface Cat {
  name: string
  description: string
}

export type Categories = Record<string, Cat[]>
