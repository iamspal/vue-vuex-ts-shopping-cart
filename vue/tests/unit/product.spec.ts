import { config, shallowMount } from '@vue/test-utils';
import Product from '@/components/Product.vue';
import filters from '@/utils/filters/filters';

config.global.mocks = {
  $filters: filters,
};

describe('Home.vue', () => {
  const productData = {
    id: 'dlflsjfldskf',
    name: 'Unbranded Metal Chair',
    img: 'https://dummyimage.com/400x400/28200e/000&text=Unbranded%20Metal%20Chair',
    description: 'Porro tempore autem. Sunt molestias qui quod recus...',
    descriptionMaxLength: 50,
    price: 10,
    stock: 10,
    fav: 1,
  };

  test('On click on add to cart should trigger add-to-cart event', () => {
    const wrapper = shallowMount(Product, {
      props: productData,
    });

    // Click on add to cart button
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('add-to-cart');
  });

  test('On click on heart icon should trigger toggle-favorite event', () => {
    const wrapper = shallowMount(Product, {
      props: productData,
    });

    // Click on add to cart button
    wrapper.find('.product__fav').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('toggle-favorite');
  });

  test('On click on out of stock product\'s add to cart should not trigger add-to-cart event',
    () => {
      productData.stock = 0;
      const wrapper = shallowMount(Product, {
        props: productData,
      });

      // Click on add to cart button
      wrapper.find('button').trigger('click');
      expect(wrapper.emitted()).toEqual({});
    });
});
