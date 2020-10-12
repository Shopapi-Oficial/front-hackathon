import React, { memo } from 'react';
import {
  IconHome,
  IconDevices,
  IconTicket,
  IconCar,
  IconBallBasketball,
} from 'tabler-icons';

import { CategoriesConteiner, Category, CategoryTitle } from './styles';

const Categories = memo(() => (
  <CategoriesConteiner>
    <Category>
      <IconHome color="#3D9426" />
      <CategoryTitle>Casa</CategoryTitle>
    </Category>

    <Category>
      <IconDevices color="#3D9426" />
      <CategoryTitle>Tecnologia</CategoryTitle>
    </Category>

    <Category>
      <IconBallBasketball color="#3D9426" />
      <CategoryTitle>Esporte</CategoryTitle>
    </Category>

    <Category>
      <IconTicket color="#3D9426" />
      <CategoryTitle>Entretenimento </CategoryTitle>
    </Category>

    <Category>
      <IconCar color="#3D9426" />
      <CategoryTitle>Transporte</CategoryTitle>
    </Category>
  </CategoriesConteiner>
));

export default Categories;
