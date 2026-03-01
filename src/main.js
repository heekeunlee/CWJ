const artworks = [
    {
        id: 1,
        title: "The Flickering Hope",
        subtitle: "빛의 의지",
        image: "./assets/candle.jpg",
        description: "심연의 어둠 속에서도 꿋꿋이 타오르는 촛불은 인간 정신의 고귀한 회복력을 상징합니다. 하단의 강렬한 붉은 선들은 우리가 딛고 있는 복잡한 현실을 나타내며, 그 위에서 중심을 잡고 빛나는 불꽃은 고독 속에서의 찬란한 자아를 보여줍니다."
    },
    {
        id: 2,
        title: "Golden Mandala of Consciousness",
        subtitle: "내면의 우수",
        image: "./assets/mandala_gold.jpg",
        description: "황금빛 선으로 짜여진 이 복잡한 문양들은 우리 내면에 존재하는 또 하나의 우주를 시각화합니다. 곳곳에 배치된 예술적 상징들은 깨어있는 의식을 뜻하며, 중앙에서 뻗어 나가는 기하학적 구조는 명상을 통해 도달하는 평온과 질서의 경지를 의미합니다."
    },
    {
        id: 3,
        title: "Tranquil Symmetry",
        subtitle: "푸른 흐름의 질서",
        image: "./assets/mandala_blue.jpg",
        description: "푸른 잉크로 정교하게 그려진 이 작품은 생각의 유연함과 구조적 안정을 동시에 탐구합니다. 완벽한 대칭은 혼돈 속에서도 우리가 찾아내야 할 균형을 의미하며, 유려한 곡선들은 마치 물 흐르듯 가라앉는 깊은 사유의 시간을 상징합니다."
    }
];

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    artworks.forEach((art, index) => {
        const card = document.createElement('div');
        card.className = `art-card fade-in`;
        card.style.animationDelay = `${(index + 2) * 0.2}s`;

        card.innerHTML = `
            <div class="image-container">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="art-info">
                <h2 class="art-title">${art.title} <br><small style="font-size: 0.7em; opacity: 0.8;">${art.subtitle}</small></h2>
                <p class="art-description">${art.description}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Gallery Initialized');
    renderGallery();
});
