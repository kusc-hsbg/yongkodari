/*
 * 가맹 문의 상담 팝업 (정적 버전)
 *
 * 원본 iMweb 사이트에서 "가맹 문의하기 / 가맹 문의 상담하기" 버튼은
 * SITE.openModalMenu() -> /ajax/get_modal_menu.cm 로 팝업 내용을 받아온다.
 * 이 로컬/정적 미러에는 해당 서버 엔드포인트가 없어 팝업이 뜨지 않으므로,
 * 동일한 디자인의 팝업을 프론트에서 직접 렌더링하고 SITE.openModalMenu 를
 * 이 팝업으로 오버라이드한다. (원본 화면 참고: 바탕화면 영코.png)
 */
(function () {
	'use strict';

	// 가맹 문의 접수 이메일 (수신 주소)
	var INQUIRY_EMAIL = 'Moonjarmedi@gmail.com';
	var MODAL_ID = 'franchise-inquiry-modal';

	function injectStyle() {
		if (document.getElementById('franchise-modal-style')) return;
		var css = '' +
			'#' + MODAL_ID + '{position:fixed;inset:0;z-index:20000;display:none;}' +
			'#' + MODAL_ID + '.is-open{display:block;}' +
			'#' + MODAL_ID + ' .fm-overlay{position:absolute;inset:0;background:rgba(30,28,24,0.55);}' +
			'#' + MODAL_ID + ' .fm-dialog{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);' +
				'width:calc(100% - 40px);max-width:760px;max-height:calc(100vh - 40px);overflow:auto;' +
				'background:#ece8dc;border-radius:14px;padding:56px 64px 48px;box-sizing:border-box;' +
				'box-shadow:0 20px 60px rgba(0,0,0,0.35);}' +
			'#' + MODAL_ID + ' .fm-close{position:absolute;top:14px;right:14px;width:44px;height:44px;border:none;' +
				'border-radius:50%;background:#fff;color:#333;font-size:22px;line-height:44px;text-align:center;' +
				'cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.15);}' +
			'#' + MODAL_ID + ' .fm-title{font-family:"Nanum Myeongjo","Noto Serif KR","Batang",serif;' +
				'font-size:40px;line-height:1.35;color:#2a2723;margin:0 0 18px;font-weight:700;}' +
			'#' + MODAL_ID + ' .fm-desc{font-size:15px;line-height:1.6;color:#6b665d;margin:0 0 34px;}' +
			'#' + MODAL_ID + ' .fm-divider{height:1px;background:#cfc9ba;margin:0 0 30px;}' +
			'#' + MODAL_ID + ' .fm-field{margin-bottom:28px;}' +
			'#' + MODAL_ID + ' .fm-label{display:block;font-size:15px;color:#2a2723;margin-bottom:10px;font-weight:600;}' +
			'#' + MODAL_ID + ' .fm-input{width:100%;border:none;border-bottom:1px solid #cfc9ba;background:transparent;' +
				'font-size:16px;color:#2a2723;padding:6px 0;box-sizing:border-box;outline:none;}' +
			'#' + MODAL_ID + ' .fm-input:focus{border-bottom-color:#8a8574;}' +
			'#' + MODAL_ID + ' .fm-phone{display:flex;align-items:center;gap:10px;}' +
			'#' + MODAL_ID + ' .fm-phone .fm-input{flex:1;text-align:center;}' +
			'#' + MODAL_ID + ' .fm-phone span{color:#8a8574;}' +
			'#' + MODAL_ID + ' textarea.fm-input{border:1px solid #cfc9ba;border-radius:6px;min-height:90px;resize:vertical;padding:10px;}' +
			'#' + MODAL_ID + ' .fm-submit-wrap{text-align:center;margin-top:36px;}' +
			'#' + MODAL_ID + ' .fm-submit{border:1px solid #8a8574;background:transparent;color:#2a2723;' +
				'font-size:16px;padding:14px 46px;border-radius:9999px;cursor:pointer;transition:background .15s;}' +
			'#' + MODAL_ID + ' .fm-submit:hover{background:rgba(138,133,116,0.12);}' +
			'@media (max-width:600px){#' + MODAL_ID + ' .fm-dialog{padding:48px 24px 32px;}' +
				'#' + MODAL_ID + ' .fm-title{font-size:30px;}}';
		var style = document.createElement('style');
		style.id = 'franchise-modal-style';
		style.textContent = css;
		document.head.appendChild(style);
	}

	function injectModal() {
		if (document.getElementById(MODAL_ID)) return;
		var wrap = document.createElement('div');
		wrap.id = MODAL_ID;
		wrap.setAttribute('role', 'dialog');
		wrap.setAttribute('aria-modal', 'true');
		wrap.setAttribute('aria-label', '가맹 문의 상담');
		wrap.innerHTML = '' +
			'<div class="fm-overlay" data-fm-close></div>' +
			'<div class="fm-dialog">' +
				'<button type="button" class="fm-close" data-fm-close aria-label="닫기">&times;</button>' +
				'<h2 class="fm-title">가맹 문의 상담을<br>받아보세요.</h2>' +
				'<p class="fm-desc">문의 사항을 작성해주시면 고려하여<br>최대한 빠르게 답변 드리겠습니다.</p>' +
				'<div class="fm-divider"></div>' +
				'<form class="fm-form">' +
					'<div class="fm-field">' +
						'<label class="fm-label" for="fm-name">성함</label>' +
						'<input class="fm-input" id="fm-name" type="text" autocomplete="name">' +
					'</div>' +
					'<div class="fm-field">' +
						'<label class="fm-label">답변 받으실 연락처</label>' +
						'<div class="fm-phone">' +
							'<input class="fm-input" id="fm-phone1" type="tel" inputmode="numeric" maxlength="3">' +
							'<span>-</span>' +
							'<input class="fm-input" id="fm-phone2" type="tel" inputmode="numeric" maxlength="4">' +
							'<span>-</span>' +
							'<input class="fm-input" id="fm-phone3" type="tel" inputmode="numeric" maxlength="4">' +
						'</div>' +
					'</div>' +
					'<div class="fm-field">' +
						'<label class="fm-label" for="fm-message">고민 내용</label>' +
						'<textarea class="fm-input" id="fm-message" rows="3"></textarea>' +
					'</div>' +
					'<div class="fm-submit-wrap">' +
						'<button type="submit" class="fm-submit">작성 완료</button>' +
					'</div>' +
				'</form>' +
			'</div>';
		document.body.appendChild(wrap);

		wrap.addEventListener('click', function (e) {
			if (e.target.hasAttribute('data-fm-close')) closeModal();
		});
		wrap.querySelector('.fm-form').addEventListener('submit', onSubmit);
	}

	function onSubmit(e) {
		e.preventDefault();
		var name = val('fm-name');
		var phone = [val('fm-phone1'), val('fm-phone2'), val('fm-phone3')].filter(Boolean).join('-');
		var message = val('fm-message');

		if (!name) { alert('성함을 입력해주세요.'); return; }
		if (!phone) { alert('답변 받으실 연락처를 입력해주세요.'); return; }
		if (!message) { alert('고민 내용을 입력해주세요.'); return; }

		var subject = '[가맹 문의] ' + name;
		var body = '성함: ' + name + '\n연락처: ' + phone + '\n\n고민 내용:\n' + message;
		// 로그인되어 있는 Gmail 웹 작성창으로 열어 INQUIRY_EMAIL 로 발송한다.
		// (mailto/기본 메일 클라이언트 종속성 제거)
		var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1' +
			'&to=' + encodeURIComponent(INQUIRY_EMAIL) +
			'&su=' + encodeURIComponent(subject) +
			'&body=' + encodeURIComponent(body);
		window.open(gmailUrl, '_blank', 'noopener');
		closeModal();
	}

	function val(id) {
		var el = document.getElementById(id);
		return el ? el.value.trim() : '';
	}

	function openModal() {
		injectStyle();
		injectModal();
		var modal = document.getElementById(MODAL_ID);
		modal.classList.add('is-open');
		document.body.style.overflow = 'hidden';
		var first = document.getElementById('fm-name');
		if (first) first.focus();
	}

	function closeModal() {
		var modal = document.getElementById(MODAL_ID);
		if (modal) modal.classList.remove('is-open');
		document.body.style.overflow = '';
	}

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeModal();
	});

	// 원본 팝업 호출을 정적 팝업으로 대체
	function applyOverride() {
		if (window.SITE) {
			window.SITE.openModalMenu = function () { openModal(); };
		}
	}
	applyOverride();
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyOverride);
	}

	// 전역에서 직접 열 수 있도록 노출
	window.openFranchiseModal = openModal;
})();
