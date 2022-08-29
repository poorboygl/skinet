// 데이터 요청
function requestData(url, xml, gridId) {

	// ajax 요청 전 그리드에 로더 표시
	AUIGrid.showAjaxLoader(gridId);

	// ajax (XMLHttpRequest) 로 그리드 데이터 요청
	ajax( {
		url : url,
		onSuccess : function(data) {
			// 그리드 데이터
			var gridData = data;

			// 로더 제거
			AUIGrid.removeAjaxLoader(gridId);

			if(xml) { // XML 응답인 경우
				// 그리드에 XML 데이터 세팅
				AUIGrid.setXmlGridData(gridId, gridData);
			} else {
				// 그리드에 데이터 세팅
				AUIGrid.setGridData(gridId, gridData);
			}
		},
		onError : function(status, e) {
			// 로더 제거
			AUIGrid.removeAjaxLoader(gridId);

			alert("데이터 요청에 실패하였습니다.\r status : " + status);
		}
	});
};


