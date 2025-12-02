import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SweetPotatoCard from './components/SweetPotatoCard';
import type { SweetPotato } from './types';

const sweetPotatoVarieties: SweetPotato[] = [
  {
    koreanName: '꿀고구마',
    englishName: 'Beni-haruka',
    description: '꿀처럼 달콤한 맛이 일품인 품종입니다. 숙성될수록 당도가 높아져 더욱 촉촉하고 부드러운 식감을 자랑합니다. 군고구마나 찜으로 먹었을 때 최고의 맛을 느낄 수 있습니다.',
    imageUrl: 'https://picsum.photos/id/1080/600/400',
    tags: ['달콤함', '촉촉함', '군고구마추천'],
    bgColor: 'bg-amber-50',
    accentColor: 'text-amber-700',
    tagBgColor: 'bg-amber-200',
    tagTextColor: 'text-amber-800',
  },
  {
    koreanName: '호박고구마',
    englishName: 'Pumpkin Sweet Potato',
    description: '속이 노란 호박색을 띠며, 부드럽고 달콤한 맛이 특징입니다. 수분 함량이 많아 목이 메이지 않고, 아이들 간식이나 다이어트 식단으로 인기가 많습니다.',
    imageUrl: 'https://picsum.photos/id/292/600/400',
    tags: ['부드러움', '영양간식', '다이어트'],
    bgColor: 'bg-orange-50',
    accentColor: 'text-orange-700',
    tagBgColor: 'bg-orange-200',
    tagTextColor: 'text-orange-800',
  },
  {
    koreanName: '밤고구마',
    englishName: 'Chestnut Sweet Potato',
    description: '밤처럼 포슬포슬한 식감과 담백한 단맛이 매력적인 품종입니다. 수분은 적지만 퍽퍽하지 않고, 튀김이나 맛탕으로 만들면 더욱 맛있게 즐길 수 있습니다.',
    imageUrl: 'https://picsum.photos/id/102/600/400',
    tags: ['포슬포슬', '담백한맛', '맛탕용'],
    bgColor: 'bg-yellow-50',
    accentColor: 'text-yellow-800',
    tagBgColor: 'bg-yellow-200',
    tagTextColor: 'text-yellow-900',
  },
   {
    koreanName: '자색고구마',
    englishName: 'Purple Sweet Potato',
    description: '아름다운 보랏빛을 띠며 안토시아닌이 풍부해 건강에 좋습니다. 단맛은 다른 품종에 비해 적지만, 샐러드나 라떼, 베이킹 등 다양하게 활용하기 좋습니다.',
    imageUrl: 'https://picsum.photos/id/1066/600/400',
    tags: ['건강', '안토시아닌', '다양한활용'],
    bgColor: 'bg-purple-50',
    accentColor: 'text-purple-700',
    tagBgColor: 'bg-purple-200',
    tagTextColor: 'text-purple-800',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <section className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            여주 고구마의 다채로운 매력
          </h2>
          <p className="max-w-3xl mx-auto text-stone-600 leading-relaxed">
            대한민국 최고의 고구마 명산지, 여주. 비옥한 황토와 풍부한 햇살이 빚어낸 달콤하고 영양 가득한 여주 고구마의 세계로 여러분을 초대합니다.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {sweetPotatoVarieties.map((potato) => (
            <SweetPotatoCard key={potato.koreanName} potato={potato} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;