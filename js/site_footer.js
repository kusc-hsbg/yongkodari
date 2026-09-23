/*
 * 연코다리 최소 풋터 (정적 버전)
 *
 * 기존 iMweb 풋터(.footer-section)는 사업자/대표자/아임웹 안내 등이 들어있어
 * CSS(.footer-section{display:none})로 숨겨져 있다. 현재 연코다리 사업자 등록이
 * 없으므로, 브랜드명과 연락 정보(이메일/전화)만 담은 간단한 풋터를 대신 표시한다.
 * 참고 디자인: 바탕화면 참고이미지1-1 / 참고이미지1-2
 */
(function () {
	'use strict';

	var EMAIL = 'yeonkodari@gmail.com';
	var PHONE = '010-4682-0149';

	function injectStyle() {
		if (document.getElementById('yk-footer-style')) return;
		var css = '' +
			'#yk-footer{background:#f5f1e8;color:#2a2723;padding:44px 20px;text-align:center;' +
				'border-top:1px solid #e6e0d3;box-sizing:border-box;}' +
			'#yk-footer .yk-inner{max-width:1200px;margin:0 auto;}' +
			'#yk-footer .yk-brand{font-family:"Nanum Myeongjo","Noto Serif KR","Batang",serif;' +
				'font-size:24px;font-weight:700;margin:0 0 14px;letter-spacing:0.02em;}' +
			'#yk-footer .yk-contact{font-size:14px;color:#6b665d;line-height:1.9;}' +
			'#yk-footer .yk-sep{margin:0 8px;color:#c9c2b3;}' +
			'@media (max-width:600px){#yk-footer .yk-sep{display:none;}' +
				'#yk-footer .yk-contact span{display:block;}}';
		var s = document.createElement('style');
		s.id = 'yk-footer-style';
		s.textContent = css;
		document.head.appendChild(s);
	}

	function build() {
		if (document.getElementById('yk-footer')) return;
		var el = document.createElement('div');
		el.id = 'yk-footer';
		el.innerHTML = '' +
			'<div class="yk-inner">' +
				'<p class="yk-brand">연코다리</p>' +
				'<p class="yk-contact">' +
					'<span>' + EMAIL + '</span>' +
					'<span class="yk-sep">|</span>' +
					'<span>' + PHONE + '</span>' +
				'</p>' +
			'</div>';
		var host = document.getElementById('doz_footer') ||
			document.getElementById('doz_footer_wrap') ||
			document.body;
		host.appendChild(el);
	}

	function init() { injectStyle(); build(); }

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
