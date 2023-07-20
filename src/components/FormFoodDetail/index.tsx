import React from 'react'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'

const FormFoodDetail = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='foodPlaceForm.ControlInputDescription'>
        <Form.Label>Mô tả</Form.Label>
        <Form.Control as='textarea' rows={6} />
      </Form.Group>

      <Row>
        <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputCategoryBusiness'>
          <Form.Label>Loại hình</Form.Label>
          <Form.Select aria-label='Default select types'>
            <option>Open this select types</option>
            {[
              [
                { type: 'luxury', name: 'Sang trọng' },
                { type: 'buffet', name: 'Buffet' },
                { type: 'restaurant', name: 'Nhà hàng' },
                { type: 'street_food', name: 'Ăn vặt, vỉa hè' },
                { type: 'vegetarian', name: 'Ăn chay' },
                { type: 'coffee_dessert', name: 'Cafe/Dessert' },
                { type: 'bistro', name: 'Quán ăn' },
                { type: 'bar', name: 'Bar/Pub' },
                { type: 'boozer', name: 'Quán nhậu' },
                { type: 'beerclub', name: 'Beer club' },
                { type: 'bakery', name: 'Tiệm bánh' },
                { type: 'catering', name: 'Tiệc tận nơi' },
                { type: 'shop_online', name: 'Shop online' },
                { type: 'rice_office', name: 'Giao cơm văn phòng' },
                { type: 'food_court', name: 'Khu ẩm thực' }
              ].map((type, index) => (
                <option value={type.type} key={index}>
                  {type.name}
                </option>
              ))
            ]}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputDiningTimes'>
          <Form.Label>Hoạt động</Form.Label>
          <Form.Select aria-label='Default select dining times'>
            <option>Open this select dining times</option>
            {[
              [
                { type: 'breakfast', name: 'Buổi sáng' },
                { type: 'lunch', name: 'Buổi trưa' },
                { type: 'afternoon', name: 'Buổi xế' },
                { type: 'dinner_time', name: 'Buổi tối' },
                { type: 'late_night', name: 'Buổi khuya' }
              ].map((diningTimes) => (
                <option value={diningTimes.type} key={diningTimes.type}>
                  {diningTimes.name}
                </option>
              ))
            ]}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputPrices'>
          <Form.Label>Mức giá</Form.Label>
          {[
            [
              { type: 'affordable', name: 'Bình dân' },
              { type: 'mid-range', name: 'Hạng trung' },
              { type: 'luxury-price', name: 'Sang trọng' }
            ].map((price) => (
              <Form.Check // prettier-ignore
                key={price.type}
                type='checkbox'
                id={`${price.type}`}
                label={`${price.name}`}
                value={price.type}
              />
            ))
          ]}
        </Form.Group>
      </Row>

      <ListGroup className='mb-3'>
        <Form.Label>Phong cách ẩm thực</Form.Label>
        <ListGroup.Item>
          <Row>
            {[
              { type: 'algeria', name: 'Algeria' },
              { type: 'coffe', name: 'Cà phê' },
              { type: 'cajun_creole', name: 'Cajun & Creole' },
              { type: 'calabria', name: 'Calabria' },
              { type: 'campania', name: 'Campania' },
              { type: 'vatalonia', name: 'Catalonia' },
              { type: 'delicious_food_shop', name: 'Cửa hàng thức ăn ngon' },
              { type: 'fastfood', name: 'Đồ ăn nhanh' },
              { type: 'barbecue', name: 'Đồ nướng' },
              { type: 'nowadays', name: 'Đương đại' },
              { type: 'seafood', name: 'Hải sản' },
              { type: 'asian_style', name: 'Kiểu Á' },
              { type: 'afghans_style', name: 'Kiểu Afghanistan' },
              { type: 'egyptian_style', name: 'Kiểu Ai Cập' },
              { type: 'indian_style', name: 'Kiểu Ấn Độ' },
              { type: 'albanian_style', name: 'Kiểu An-ba-ni' },
              { type: 'british_style', name: 'Kiểu Anh' },
              { type: 'armenian_style', name: 'Kiểu Armenia' },
              { type: 'european_style', name: 'Kiểu Âu' },
              { type: 'azerbaijani_style', name: 'Kiểu Azerbaijan' },
              { type: 'bangladeshi_style', name: 'Kiểu Bangladesh' },
              { type: 'basque_style', name: 'Kiểu Basque' },
              { type: 'portuguese_style', name: 'Kiểu Bồ Đào Nha' },
              { type: 'dinner_type', name: 'Kiểu Bữa tối' },
              { type: 'caribbean_style', name: 'Kiểu Caribê' },
              { type: 'taiwanese_style', name: 'Kiểu Đài Loan' },
              { type: 'danish_style', name: 'Kiểu Đan Mạch' },
              { type: 'mediterranean_style', name: 'Kiểu Địa Trung Hải' },
              { type: 'eastern_european_style', name: 'Kiểu Đông Âu' },
              { type: 'german_style', name: 'Kiểu Đức' },
              { type: 'korean_style', name: 'Kiểu Hàn Quốc' },
              { type: 'hawaiian_style', name: 'Kiểu Hawai' },
              { type: 'greek_style', name: 'Kiểu Hy Lạp' },
              { type: 'indonesian_style', name: 'Kiểu Indonesia' },
              { type: 'irish_style', name: 'Kiểu Ireland' },
              { type: 'jamaican_style', name: 'Kiểu Jamaica' },
              { type: 'latin_style', name: 'Kiểu La tinh' },
              { type: 'latvian_style', name: 'Kiểu Latvia' },
              { type: 'malaysian_style', name: 'Kiểu Malaysia' },
              { type: 'mexican_style', name: 'Kiểu Mexico' },
              { type: 'american_style', name: 'Kiểu Mỹ' },
              { type: 'native_american_style', name: 'Kiểu Mỹ bản xứ' },
              { type: 'south_american_style', name: 'Kiểu Nam Mỹ' },
              { type: 'russian_style', name: 'Kiểu Nga' },
              { type: 'japanese_style', name: 'Kiểu Nhật' },
              { type: 'pakistani_style', name: 'Kiểu Pakistan' },
              { type: 'french_style', name: 'Kiểu Pháp' },
              { type: 'filipino_style', name: 'Kiểu Phillipin' },
              { type: 'scandinavian_style', name: 'Kiểu Scandinavi' },
              { type: 'singaporean_style', name: 'Kiểu Singapore' },
              { type: 'spanish_style', name: 'Kiểu Tây Ban Nha' },
              { type: 'southwestern_style', name: 'Kiểu Tây nam' },
              { type: 'thai_style', name: 'Kiểu Thái' },
              { type: 'turkish_style', name: 'Kiểu Thổ Nhĩ Kỳ' },
              { type: 'asian_style', name: 'Kiểu Trung Á' },
              { type: 'middle_eastern_style', name: 'Kiểu Trung Đông' },
              { type: 'central_american_style', name: 'Kiểu Trung Mỹ' },
              { type: 'chinese_style', name: 'Kiểu Trung Quốc' },
              { type: 'australian_style', name: 'Kiểu Úc' },
              { type: 'ukrainian_style', name: 'Kiểu Ukraina' },
              { type: 'vietnamese_style', name: 'Kiểu Việt' },
              { type: 'italian_style', name: 'Kiểu Ý' },
              { type: 'southern_italy', name: 'Miền Nam nước Ý' },
              { type: 'combined_dishes', name: 'Món kết hợp' },
              { type: 'naples', name: 'Naples' },
              { type: 'beer_restaurant', name: 'Nhà hàng bia' },
              { type: 'steakhouse', name: 'Nhà hàng bít tết' },
              { type: 'japanese_fusion_culinary_style', name: 'Phong cách ẩm thực Fusion Nhật Bản' },
              { type: 'pizza', name: 'Pizza' },
              { type: 'refreshment_fruit_shop', name: 'Quán bán trái cây giải khát' },
              { type: 'the_bar_serves_food', name: 'Quán bar phục vụ đồ ăn' },
              { type: 'pub', name: 'Quán rượu' },
              { type: 'gastropub_specialties', name: 'Quán rượu đặc sản' },
              { type: 'guangdong', name: 'Quảng Đông' },
              { type: 'bar_culi', name: 'Quầy bar' },
              { type: 'wine_bar', name: 'Quầy rượu vang' },
              { type: 'international', name: 'Quốc tế' },
              { type: 'soup', name: 'Súp' },
              { type: 'sushi', name: 'Sushi' },
              { type: 'xinjiang', name: 'Tân Cương' },
              { type: 'barbecue', name: 'Thịt nướng' },
              { type: 'street_food_culi', name: 'Thức ăn đường phố' },
              { type: 'good_for_health', name: 'Tốt cho sức khỏe' },
              { type: 'vietnamese_food', name: 'Món Việt' },
              { type: 'america', name: 'Châu Mỹ' },
              { type: 'japanese_food', name: 'Món Nhật' },
              { type: 'asian_food', name: 'Món Á' },
              { type: 'western_food', name: 'Món Âu' },
              { type: 'korea_food', name: 'Món Hàn' },
              { type: 'chinese_food', name: 'Món Trung Hoa' },
              { type: 'singapore', name: 'Singapore' },
              { type: 'taiwanese', name: 'Đài Loan' }
            ].map((culinaryStyle, index) => (
              <Col key={index} md='3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={`${culinaryStyle.type}`}
                  label={`${culinaryStyle.name}`}
                  name='culinary_style'
                />
              </Col>
            ))}
          </Row>
        </ListGroup.Item>
      </ListGroup>

      <Form.Group className='mb-3' controlId='foodPlaceForm.ControlInputStandFoods'>
        <Form.Label>Phục vụ các món ăn</Form.Label>
        <Form.Control type='text' placeholder='Vui lòng nhập các món ăn' />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputCapacity'>
          <Form.Label>Sức chứa</Form.Label>
          <Form.Control type='number' placeholder='Vui lòng nhập sức chứa' />
        </Form.Group>

        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputLastAdmissionTime'>
          <Form.Label>Giờ nhận khách cuối</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập giờ nhận khách cuối' />
        </Form.Group>

        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputPreparationTime'>
          <Form.Label>Thời gian chuẩn bị</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập thời gian chuẩn bị' />
        </Form.Group>

        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputHoliday'>
          <Form.Label>Nghỉ lễ</Form.Label>
          <Form.Select aria-label='Default select holiday'>
            <option>Open this select holiday</option>
            {[
              [
                { type: 'all_holiday', name: 'Các ngày nghỉ trong năm' },
                { type: 'no_holiday', name: 'Không nghỉ lễ' }
              ].map((holiday) => (
                <option value={holiday.type} key={holiday.type}>
                  {holiday.name}
                </option>
              ))
            ]}
          </Form.Select>
        </Form.Group>
      </Row>
    </Form>
  )
}

export default FormFoodDetail
