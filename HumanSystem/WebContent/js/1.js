$(document).ready(function(){
	//ҳ���е�DOM�Ѿ�װ�����ʱ��ִ�еĴ���
	$(".main > a").click(function(){
		//�ҵ����˵����Ӧ���Ӳ˵���
		var ulNode = $(this).next("ul");
		ulNode.slideToggle();
		changeIcon($(this));
	});
	$(".hmain").hover(function(){
		$(this).children("ul").slideDown();
		changeIcon($(this).children("a"));
	},function(){
		$(this).children("ul").slideUp();
		changeIcon($(this).children("a"));
	});
});
 
/**
 * �޸����˵���ָʾͼ��
 */
function changeIcon(mainNode) {
	if (mainNode) {
		if (mainNode.css("background-image").indexOf("collapsed.gif") >= 0) {
			mainNode.css("background-image","url('images/expanded.gif')");
		} else {
			mainNode.css("background-image","url('images/collapsed.gif')");
		}
	}
}
