<template>
  <div class="wrap">
    <div class="attraction_menu">
      <div class="attraction_cate " data-id="">
        전체
      </div>
      <div class="attraction_cate on" data-id="301">
        관광지
      </div>
      <div class="attraction_cate " data-id="302">
        레저/액티비티
      </div>
      <div class="attraction_cate " data-id="303">
        나이트라이프
      </div>
      <div class="attraction_cate last" data-id="tip">
        여행TIP
      </div>
      <div class="clear"></div>
    </div>
    <div class="category_list">
      <div class="category_box first">
        <div class="category_btn" data-id="301012" data-on="off">건축물</div>
        <div class="category_btn" data-id="301011" data-on="off">공원/정원/광장</div>
        <div class="category_btn" data-id="301010" data-on="off">관공서/학교</div>
        <div class="category_btn" data-id="301009" data-on="off">교통</div>
        <div class="clear"></div>
      </div>
      <div class="category_box ">
        <div class="category_btn" data-id="301008" data-on="off">기념관/기념비(6)</div>
        <div class="category_btn" data-id="302007" data-on="off">데이투어/액티비티(27)</div>
        <div class="category_btn" data-id="301007" data-on="off">랜드마크(12)</div>
        <div class="category_btn" data-id="303002" data-on="off">바(25)</div>
        <div class="clear"></div>
      </div>
      <div class="category_box hide" style="display: block;">
        <div class="category_btn" data-id="301006" data-on="off">박물관/미술관(36)</div>
        <div class="category_btn" data-id="302001" data-on="off">스포츠(2)</div>
        <div class="category_btn on" data-id="301005" data-on="on">역사/종교(26)</div>
        <div class="category_btn" data-id="302006" data-on="off">오락/이벤트(4)</div>
        <div class="clear"></div>
      </div>
      <div class="category_box hide" style="display: block;">
        <div class="category_btn" data-id="302005" data-on="off">웰니스/스파(30)</div>
        <div class="category_btn" data-id="301004" data-on="off">유명거리/이색장소(29)</div>
        <div class="category_btn" data-id="301003" data-on="off">인포센터(1)</div>
        <div class="category_btn" data-id="301002" data-on="off">자연(2)</div>
        <div class="clear"></div>
      </div>
      <div class="category_box hide" style="display: block;">
        <div class="category_btn" data-id="301001" data-on="off">전경/전망대(10)</div>
        <div class="category_btn" data-id="302004" data-on="off">전시/공연/관람(34)</div>
        <div class="category_btn" data-id="303003" data-on="off">클럽(20)</div>
        <div class="category_btn" data-id="302003" data-on="off">테마파크/동물원(9)</div>
        <div class="clear"></div>
      </div>
      <div class="category_box hide" style="display: block;">
        <div class="category_btn" data-id="302002" data-on="off">트레킹/하이킹(4)</div>
        <div class="category_btn" data-id="303004" data-on="off">펍/선술집(25)</div>
        <div class="clear"></div>
      </div>
      <div class="category_more" data-on="on"><span>카테고리 닫기</span><img
          src="/res/img/city/spot_list/category_more_on.gif" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSelection"
}
</script>

<style scoped>
.content {
  line-height: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 12px;

}

.wrap .content {
  padding-top: 70px;
  width: 1092px;
  margin: 0 auto;
  position: relative;
}

.content_filter {
  width: 100%;
  border: 1px solid #cfcfcf;
  margin-bottom: 20px;
}
</style>