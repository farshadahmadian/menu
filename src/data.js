// export const data = {
//   mainCategories: [
//     { id: 1, name: 'Digital Products' },
//     { id: 2, name: 'Cars' },
//   ],
//   secondCategories: [
//     { parentId: 1, id: 100, name: 'Phones' },
//     { parentId: 1, id: 101, name: 'Laptops' },
//     { parentId: 2, id: 102, name: 'BMW' },
//   ],
//   thirdCategories: [
//     { parentId: 100, id: 200, name: 'Samsung' },
//     { parentId: 100, id: 201, name: 'Iphone' },
//   ],
// };

// export const data = [
//   { id: 1, name: 'Digital Products', parentId: null },
//   { id: 2, name: 'Cars', parentId: null },
//   { id: 3, parentId: 1, name: 'Phones' },
//   { id: 4, parentId: 1, name: 'Laptops' },
//   { id: 5, parentId: 2, name: 'BMW' },
//   { id: 6, parentId: 3, name: 'Samsung' },
//   { id: 7, parentId: 3, name: 'Iphone' },
// ];
export const data = [
  {
    name: 'Digital Products',
    child: [
      {
        name: 'Phones',
        child: [
          {
            name: 'Iphone',
            child: [
              {
                name: 'Iphone 14',
                child: [
                  {
                    name: 'Iphone 14 512GB',
                    child: [{ name: 'Iphone 14 512GB Black' }],
                  },
                  { name: 'Iphone 14 1TB' },
                ],
              },
            ],
          },
          { name: 'Samsung' },
        ],
      },
      { name: 'Laptops' },
    ],
  },
  { name: 'Cars', child: [{ name: 'BMW' }] },
];

// function repeat(obj) {
//   console.log(obj?.name);
//   obj?.child?.forEach(repeat(obj?.child[0]));
//   return;
// }

// repeat(data[0]);
