import { FC, useState } from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppSelector } from '@/store/hooks';
import { rootSelectors } from '@/store/ducks';
import LicenseCard from '@/components/LicenseCard';
import Domain from '@/components/Domain';
import Button from '@/UIComponents/Button';

const UserSubscriptions: FC = () => {
  const subscribes = useAppSelector(rootSelectors.subscribes.selectSubscribes);

  const [selectedSubscribeId, setSelectedSubscribe] = useState(subscribes?.[0].id || 0);

  const codes = useAppSelector((state) => rootSelectors.codes.selectCodesBySubscribeId(state, selectedSubscribeId));

  return (
    <Root>
      <SliderContainer>
        <StyledSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={29}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.mySwiper-pagination',
            type: 'fraction',
          }}
        >
          {subscribes?.map((subscribe) => (
            <SwiperSlide key={subscribe.id}>
              <LicenseCard />
            </SwiperSlide>
          ))}
          <PaginationContainer>
            <StyledPrevButton className="swiper-button-prev" />
            <StyledPagination className="mySwiper-pagination" />
            <StyledNextButton className="swiper-button-next" />
          </PaginationContainer>
        </StyledSwiper>
      </SliderContainer>
      <DomainsContainer>
        <Domain isActive name="1" />
        <Domain name="2" />
        <Domain name="3" />
      </DomainsContainer>
      <ConfirmContainer>
        <ConfirmDescription>Select the domains you want to keep</ConfirmDescription>
        <Button variant="primary" size="large">
          Confirm
        </Button>
      </ConfirmContainer>
    </Root>
  );
};

const Root = styled.div``;

const PaginationContainer = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  align-items: center;
  height: 44px;
`;

const StyledPagination = styled.div`
  position: relative;
  display: flex;
  justify-content: bottom;
  font-family: ${(props) => props.theme.font.main};
  font-style: 'normal';
  font-weight: 700px;
  font-size: 22px;
  line-height: 28px;
  max-width: min-content;
`;

const StyledPrevButton = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 400;
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.color500};
  border-radius: 12px;
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4609 3.53918L3.00001 12.0001L11.4609 20.4609' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.00009 12L21 12' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  &:after {
    content: '';
  }
`;

const StyledNextButton = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.color500};
  border-radius: 12px;
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5391 3.53918L21 12.0001L12.5391 20.4609' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.9999 12L3 12' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  &:after {
    content: '';
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 450px;
  .swiper-wrapper {
    max-height: 380px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  gap: 28px;
  overflow: hidden;
`;

const DomainsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 100px;
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`;

const ConfirmDescription = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;

export default UserSubscriptions;