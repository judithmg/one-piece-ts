export default function getThumbnailUrl(n: any) {
  switch (n) {
    case "skullLuffy":
    case 9001:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_luffy.png";
    case "skullZoro":
    case 9002:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_zoro.png";
    case "skullNami":
    case 9003:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_nami.png";
    case "skullUsopp":
    case 9004:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_usopp_f.png";
    case "skullSanji":
    case 9005:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_sanji_f.png";
    case "skullChopper":
    case 9006:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_chopper_f.png";
    case "skullRobin":
    case 9007:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_robin_f.png";
    case "skullFranky":
    case 9008:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_franky_f.png";
    case "skullBrook":
    case 9009:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/skull_brook_f.png";
    case "skullSTR":
    case 9010:
      return "";
    case "skullQCK":
    case 9011:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/blue_skull_f.png";
    case "skullPSY":
    case 9012:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/yellow_skull2_f.png";
    case "skullDEX":
    case 9013:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/green_skull2_f.png";
    case "skullINT":
    case 9014:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/black_skull_f.png";
    case "skullJudge":
    case 9015:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f1.png";
    case "skullReiju":
    case 9016:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f2.png";
    case "skullIchiji":
    case 9017:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f3.png";
    case "skullNiji":
    case 9018:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f4.png";
    case "skullYonji":
    case 9019:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f5.png";
    case "skullDoffy":
    case 9020:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Doflamingo_skull_f.png";
    case "skullEnel":
    case 9021:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/enel_skull_f.png";
    case "skullHiguma":
    case 9022:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/higuma_skull_f.png";
    case "skullSanji2":
    case 9023:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/sanji_skull_f.png";
    case "skullFrankie":
    case 9024:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/frankie_skull_f.png";
    case "skullCavendish":
    case 9025:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Cavendish_skull_f.png";
    case "skullDoflamingo":
    case 9026:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Doflamingo_skull_f2.png";
    case "skullIchiji2":
    case 9027:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f6.png";
    case "skullNiji2":
    case 9028:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f7.png";
    case "skullYonji2":
    case 9029:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f8.png";
    case "skullReiju2":
    case 9030:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Jerma_skull_f9.png";
    case "skullHancock":
    case 9031:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/Hancock_skull_f.png";
    case "skullNami2":
    case 9032:
      return "https://onepiece-treasurecruise.com/wp-content/uploads/nami_skull_f.png";
    case "skullBullet":
    case 9033:
      return "../res/skullBullet.png";
    case "skullKatakuri":
    case 9034:
      return "../res/skullKatakuri.png";
    case "skullWhitebeard":
    case 9035:
      return "../res/skullWhitebeard.png";
    case "skullCP9":
    case 9036:
      return "../res/skullCP9.png";
    case "skullRaidKaido":
    case 9037:
      return "../res/skullKaidoRaid.png";
    case "skullBlackbeard":
    case 9038:
      return "../res/skullBlackbeard.png";
    case "skullZoro2":
    case 9039:
      return "../res/skullZoro2.png";
    case 9040:
      return "../res/skullSanji2.png";
    case "skullMihawk":
    case 9041:
      return "../res/skullMihawk.png";
    case 9042:
      return "../res/skullNami2.png";
    default:
  }
  if (n === null || n === undefined)
    return "https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png";

  var id = ("0000" + n).slice(-4).replace(/(057[54])/, "0$1"); // missing aokiji image
  switch (id) {
    case "0742":
      return "https://onepiece-treasurecruise.com/wp-content/uploads/f0742-2.png";

    case "3000":
      return "https://onepiece-treasurecruise.com/wp-content/uploads/f3000_1.png";

    case "3333":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5013.png";

    case "3334":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png";

    case "3339":
      return "../res/character_10852_t1.png";

    case "3340":
      return "../res/character_10853_t1.png";

    case "3347":
      return "../res/character_1508_t1.png";

    case "3348":
      return "../res/character_1509_t1.png";

    case "3349":
      return "../res/character_1510_t1.png";

    case "3350":
      return "../res/character_1511_t1.png";

    case "3351":
      return "../res/character_10861_t1.png";

    case "3352":
      return "../res/character_10862_t1.png";

    case "3353":
      return "../res/character_10994_t1.png";

    case "3354":
      return "../res/character_10995_t1.png";

    case "3356":
      return "../res/character_10869_t1.png";

    case "3357":
      return "../res/character_10870_t1.png";

    case "3358":
      return "../res/character_10867_t1.png";

    case "3359":
      return "../res/character_10868_t1.png";

    case "3360":
      return "../res/character_11037_t1.png";

    case "3361":
      return "../res/character_11038_t1.png";

    case "2768":
      return "../res/character_10258_t1.png";

    case "2769":
      return "../res/character_10259_t1.png";

    case "2770":
      return "../res/character_10262_t1.png";

    case "2771":
      return "../res/character_10263_t1.png";

    case "3366":
      return "../res/character_10858_t1.png";

    case "3367":
      return "../res/character_10859_t1.png";

    case "3368":
      return "../res/character_10860_t1.png";

    case "3370":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5052.png";

    case "3371":
      return "../res/character_11243_t.png";

    case "3372":
      return "../res/character_11244_t.png";

    case "3373":
      return "../res/character_11245_t.png";

    case "3374":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5053.png";

    case "3375":
      return "../res/character_10863_t.png";

    case "3376":
      return "../res/character_10864_t.png";

    case "3380":
      return "../res/character_11333_t1.png";

    case "3381":
      return "../res/KDugejE.png";

    case "3382":
      return "../res/character_11615_t1.png";

    case "3383":
      return "../res/character_11760_t.png";

    case "3384":
      return "../res/character_11400_t1.png";

    case "3385":
      return "../res/character_11338_t1.png";

    case "5000":
      return "../res/character_10185_t1.png";

    case "5001":
      return "../res/character_10186_t1.png";

    case "5002":
      return "../res/character_10187_t1_int.png";

    case "5003":
      return "../res/character_10187_t1_psy.png";

    case "5004":
      return "../res/character_10173_t1.png";

    case "5005":
      return "../res/character_10174_t1.png";

    case "5006":
      return "../res/character_10177_t1_qck.png";

    case "5007":
      return "../res/character_10177_t1_str.png";

    case "5008":
      return "../res/character_10175_t1.png";

    case "5009":
      return "../res/character_10176_t1.png";

    case "5010":
      return "../res/character_10178_t1_qck.png";

    case "5011":
      return "../res/character_10178_t1_str.png";

    case "5012":
      return "../res/character_10181_t1.png";

    case "5013":
      return "../res/character_10182_t1.png";

    case "5014":
      return "../res/character_10183_t1_psy.png";

    case "5015":
      return "../res/character_10183_t1_dex.png";

    case "5016":
      return "../res/character_10344_t1.png";

    case "5017":
      return "../res/character_10345_t1.png";

    case "5018":
      return "../res/character_10348_t1_psy.png";

    case "5019":
      return "../res/character_10348_t1_int.png";

    case "5020":
      return "../res/character_10346_t1.png";

    case "5021":
      return "../res/character_10347_t1.png";

    case "5022":
      return "../res/character_10349_t1_psy.png";

    case "5023":
      return "../res/character_10349_t1_int.png";

    case "5024":
      return "../res/character_10496_t1.png";

    case "5025":
      return "../res/character_10497_t1.png";

    case "5026":
      return "../res/character_10498_t1_dex.png";

    case "5027":
      return "../res/character_10498_t1_str.png";

    case "5028":
      return "../res/character_10636_t1.png";

    case "5029":
      return "../res/character_10637_t1.png";

    case "5030":
      return "../res/character_10640_t1_int.png";

    case "5031":
      return "../res/character_10640_t1_dex.png";

    case "5032":
      return "../res/character_10638_t1.png";

    case "5033":
      return "../res/character_10639_t1.png";

    case "5034":
      return "../res/character_10641_t1_int.png";

    case "5035":
      return "../res/character_10641_t1_dex.png";

    case "5036":
      return "../res/character_10649_t1.png";

    case "5037":
      return "../res/character_10650_t1.png";

    case "5038":
      return "../res/character_10653_t1_dex.png";

    case "5039":
      return "../res/character_10653_t1_qck.png";

    case "5040":
      return "../res/character_10651_t1.png";

    case "5041":
      return "../res/character_10652_t1.png";

    case "5042":
      return "../res/character_10654_t1_dex.png";

    case "5043":
      return "../res/character_10654_t1_qck.png";

    //case '2818': return '../res/character_10707_t1.png';
    //case '2819': return '../res/character_10708_t1.png';
    case "5044":
      return "../res/character_10703_t.png";

    case "5045":
      return "../res/character_10704_t.png";

    case "5046":
      return "../res/character_10707_t1_qck.png";

    case "5047":
      return "../res/character_10707_t1_int.png";

    case "5048":
      return "../res/character_10705_t.png";

    case "5049":
      return "../res/character_10706_t.png";

    case "5050":
      return "../res/character_10708_t1_qck.png";

    case "5051":
      return "../res/character_10708_t1_int.png";

    case "5052":
      return "../res/character_10720_t1.png";

    case "5053":
      return "../res/character_10721_t1.png";

    case "5054":
      return "../res/character_10724_t1_psy.png";

    case "5055":
      return "../res/character_10722_t1.png";

    case "5056":
      return "../res/character_10723_t1.png";

    case "5057":
      return "../res/character_10725_t1_psy.png";

    case "5058":
      return "../res/character_10735_t1.png";

    case "5059":
      return "../res/character_10736_t1.png";

    case "5060":
      return "../res/character_10739_t1_psy.png";

    case "5061":
      return "../res/character_10739_t1_qck.png";

    case "5062":
      return "../res/character_10737_t1.png";

    case "5063":
      return "../res/character_10738_t1.png";

    case "5064":
      return "../res/character_10740_t1_psy.png";

    case "5065":
      return "../res/character_10740_t1_qck.png";

    case "5066":
      return "../res/character_10832_t1.png";

    case "5067":
      return "../res/character_10833_t1.png";

    case "5068":
      return "../res/character_10836_t1_int.png";

    case "5069":
      return "../res/character_10836_t1_qck.png";

    case "5070":
      return "../res/character_10834_t1.png";

    case "5071":
      return "../res/character_10835_t1.png";

    case "5072":
      return "../res/character_10837_t1_int.png";

    case "5073":
      return "../res/character_10837_t1_qck.png";

    case "5074":
      return "../res/character_10950_t1.png";

    case "5075":
      return "../res/character_10951_t1.png";

    case "5076":
      return "../res/character_10952_t1_dex.png";

    case "5077":
      return "../res/character_10952_t1_qck.png";

    case "5078":
      return "../res/character_10773_t1.png";

    case "5079":
      return "../res/character_10774_t1.png";

    case "5080":
      return "../res/character_10775_t1_int.png";

    case "5081":
      return "../res/character_10775_t1_qck.png";

    case "5082":
      return "../res/character_10784_t1.png";

    case "5083":
      return "../res/character_10785_t1.png";

    case "5084":
      return "../res/character_10788_t1_dex.png";

    case "5085":
      return "../res/character_10788_t1_qck.png";

    case "5086":
      return "../res/character_10786_t1.png";

    case "5087":
      return "../res/character_10787_t1.png";

    case "5088":
      return "../res/character_10789_t1_dex.png";

    case "5089":
      return "../res/character_10789_t1_qck.png";

    case "5090":
      return "../res/character_10816_t1.png";

    case "5091":
      return "../res/character_10817_t1.png";

    case "5092":
      return "../res/character_10820_t1_int.png";

    case "5093":
      return "../res/character_10818_t1.png";

    case "5094":
      return "../res/character_10819_t1.png";

    case "5095":
      return "../res/character_10821_t1_int.png";

    case "5096":
      return "../res/character_10871_t1.png";

    case "5097":
      return "../res/character_10872_t1.png";

    case "5098":
      return "../res/character_10875_t1_str.png";

    case "5099":
      return "../res/character_10875_t1_dex.png";

    case "5100":
      return "../res/character_10873_t1.png";

    case "5101":
      return "../res/character_10874_t1.png";

    case "5102":
      return "../res/character_10876_t1_str.png";

    case "5103":
      return "../res/character_10876_t1_dex.png";

    case "5104":
      return "../res/character_10877_t1.png";

    case "5105":
      return "../res/character_10878_t1.png";

    case "5106":
      return "../res/character_10881_t1_psy.png";

    case "5107":
      return "../res/character_10881_t1_str.png";

    case "5108":
      return "../res/character_10879_t1.png";

    case "5109":
      return "../res/character_10880_t1.png";

    case "5110":
      return "../res/character_10882_t1_psy.png";

    case "5111":
      return "../res/character_10882_t1_str.png";

    case "5112":
      return "../res/character_10883_t1.png";

    case "5113":
      return "../res/character_10884_t1.png";

    case "5114":
      return "../res/character_10887_t1_qck.png";

    case "5115":
      return "../res/character_10887_t1_psy.png";

    case "5116":
      return "../res/character_10885_t1.png";

    case "5117":
      return "../res/character_10886_t1.png";

    case "5118":
      return "../res/character_10888_t1_qck.png";

    case "5119":
      return "../res/character_10888_t1_psy.png";

    case "5120":
      return "../res/character_10826_t1.png";

    case "5121":
      return "../res/character_10827_t1.png";

    case "5122":
      return "../res/character_10830_t1_dex.png";

    case "5123":
      return "../res/character_10830_t1_int.png";

    case "5124":
      return "../res/character_10828_t1.png";

    case "5125":
      return "../res/character_10829_t1.png";

    case "5126":
      return "../res/character_10831_t1_dex.png";

    case "5127":
      return "../res/character_10831_t1_int.png";

    case "5128":
      return "../res/character_10778_t1.png";

    case "5129":
      return "../res/character_10779_t1.png";

    case "5130":
      return "../res/character_10782_t1_str.png";

    case "5131":
      return "../res/character_10782_t1_dex.png";

    case "5132":
      return "../res/character_10780_t1.png";

    case "5133":
      return "../res/character_10781_t1.png";

    case "5134":
      return "../res/character_10783_t1_str.png";

    case "5135":
      return "../res/character_10783_t1_dex.png";

    case "5136":
      return "../res/character_10895_t1.png";

    case "5137":
      return "../res/character_10896_t1.png";

    case "5138":
      return "../res/character_10899_t1_int.png";

    case "5139":
      return "../res/character_10899_t1_dex.png";

    case "5140":
      return "../res/character_10897_t1.png";

    case "5141":
      return "../res/character_10898_t1.png";

    case "5142":
      return "../res/character_10900_t1_int.png";

    case "5143":
      return "../res/character_10900_t1_dex.png";

    case "5144":
      return "../res/character_10910_t1.png";

    case "5145":
      return "../res/character_10911_t1.png";

    case "5146":
      return "../res/character_10914_t1_str.png";

    case "5147":
      return "../res/character_10914_t1_int.png";

    case "5148":
      return "../res/character_10912_t1.png";

    case "5149":
      return "../res/character_10913_t1.png";

    case "5150":
      return "../res/character_10915_t1_str.png";

    case "5151":
      return "../res/character_10915_t1_int.png";

    case "5152":
      return "../res/character_10916_t1.png";

    case "5153":
      return "../res/character_10917_t1.png";

    case "5154":
      return "../res/character_10920_t1_str.png";

    case "5155":
      return "../res/character_10920_t1_psy.png";

    case "5156":
      return "../res/character_10918_t1.png";

    case "5157":
      return "../res/character_10919_t1.png";

    case "5158":
      return "../res/character_10921_t1_str.png";

    case "5159":
      return "../res/character_10921_t1_psy.png";

    case "5160":
      return "../res/character_10954_t1.png";

    case "5161":
      return "../res/character_10955_t1.png";

    case "5162":
      return "../res/character_10958_t1_dex.png";

    case "5163":
      return "../res/character_10958_t1_str.png";

    case "5164":
      return "../res/character_10956_t1.png";

    case "5165":
      return "../res/character_10957_t1.png";

    case "5166":
      return "../res/character_10959_t1_dex.png";

    case "5167":
      return "../res/character_10959_t1_str.png";

    case "5168":
      return "../res/character_10960_t1.png";

    case "5169":
      return "../res/character_10961_t1.png";

    case "5170":
      return "../res/character_10964_t1_int.png";

    case "5171":
      return "../res/character_10964_t1_psy.png";

    case "5172":
      return "../res/character_10962_t1.png";

    case "5173":
      return "../res/character_10963_t1.png";

    case "5174":
      return "../res/character_10965_t1_int.png";

    case "5175":
      return "../res/character_10965_t1_psy.png";

    case "5176":
      return "../res/character_10803_t1.png";

    case "5177":
      return "../res/character_10804_t1.png";

    case "5178":
      return "../res/character_10805_t1_str.png";

    case "5179":
      return "../res/character_10805_t1_int.png";

    case "5180":
      return "../res/character_10889_t1.png";

    case "5181":
      return "../res/character_10890_t1.png";

    case "5182":
      return "../res/character_10891_t1_dex.png";

    case "5183":
      return "../res/character_10891_t1_qck.png";

    case "5184":
      return "../res/character_11099_t1.png";

    case "5185":
      return "../res/character_11100_t1.png";

    case "5186":
      return "../res/character_11102_t1_qck.png";

    case "5187":
      return "../res/character_11166_t1.png";

    case "5188":
      return "../res/character_11167_t1.png";

    case "5189":
      return "../res/character_11168_t1_psy.png";

    case "5190":
      return "../res/character_11168_t1_int.png";

    case "5191":
      return "../res/character_11187_t1.png";

    case "5192":
      return "../res/character_11188_t1.png";

    case "5193":
      return "../res/character_11191_t1_str.png";

    case "5194":
      return "../res/character_11191_t1_dex.png";

    case "5195":
      return "../res/character_11189_t1.png";

    case "5196":
      return "../res/character_11190_t1.png";

    case "5197":
      return "../res/character_11192_t1_str.png";

    case "5198":
      return "../res/character_11192_t1_dex.png";

    case "5199":
      return "../res/character_11129_t1.png";

    case "5200":
      return "../res/character_11130_t1.png";

    case "5201":
      return "../res/character_11131_t1_str.png";

    case "5202":
      return "../res/character_11227_t1.png";

    case "5203":
      return "../res/character_11228_t1.png";

    case "5204":
      return "../res/character_11231_t1_dex.png";

    case "5205":
      return "../res/character_11231_t1_int.png";

    case "5206":
      return "../res/character_11229_t1.png";

    case "5207":
      return "../res/character_11230_t1.png";

    case "5208":
      return "../res/character_11232_t1_dex.png";

    case "5209":
      return "../res/character_11232_t1_int.png";

    case "5210":
      return "../res/character_11260_t1.png";

    case "5211":
      return "../res/character_11261_t1.png";

    case "5212":
      return "../res/character_11262_t1_dex.png";

    case "5213":
      return "../res/character_11262_t1_int.png";

    case "5214":
      return "../res/character_11254_t1.png";

    case "5215":
      return "../res/character_11255_t1.png";

    case "5216":
      return "../res/character_11258_t1_str.png";

    case "5217":
      return "../res/character_11256_t1.png";

    case "5218":
      return "../res/character_11257_t1.png";

    case "5219":
      return "../res/character_11259_t1_str.png";

    case "5220":
      return "../res/character_11306_t1.png";

    case "5221":
      return "../res/character_11307_t1.png";

    case "5222":
      return "../res/character_11310_t1_psy.png";

    case "5223":
      return "../res/character_11310_t1_qck.png";

    case "5224":
      return "../res/character_11308_t1.png";

    case "5225":
      return "../res/character_11309_t1.png";

    case "5226":
      return "../res/character_11311_t1_psy.png";

    case "5227":
      return "../res/character_11311_t1_qck.png";

    case "5228":
      return "../res/character_11318_t1.png";

    case "5229":
      return "../res/character_11319_t1.png";

    case "5230":
      return "../res/character_11322_t1_str.png";

    case "5231":
      return "../res/character_11322_t1_qck.png";

    case "5232":
      return "../res/character_11320_t1.png";

    case "5233":
      return "../res/character_11321_t1.png";

    case "5234":
      return "../res/character_11323_t1_str.png";

    case "5235":
      return "../res/character_11323_t1_qck.png";

    case "5236":
      return "../res/character_11324_t1.png";

    case "5237":
      return "../res/character_11325_t1.png";

    case "5238":
      return "../res/character_11328_t1_qck.png";

    case "5239":
      return "../res/character_11328_t1_dex.png";

    case "5240":
      return "../res/character_11326_t1.png";

    case "5241":
      return "../res/character_11327_t1.png";

    case "5242":
      return "../res/character_11329_t1_qck.png";

    case "5243":
      return "../res/character_11329_t1_dex.png";

    case "5244":
      return "../res/character_11314_t1.png";

    case "5245":
      return "../res/character_11315_t1.png";

    case "5246":
      return "../res/character_11317_t1_int.png";

    case "5247":
      return "../res/character_11371_t1.png";

    case "5248":
      return "../res/character_11372_t1.png";

    case "5249":
      return "../res/character_11375_t1_str.png";

    case "5250":
      return "../res/character_11375_t1_psy.png";

    case "5251":
      return "../res/character_11373_t1.png";

    case "5252":
      return "../res/character_11374_t1.png";

    case "5253":
      return "../res/character_11376_t1_str.png";

    case "5254":
      return "../res/character_11376_t1_psy.png";

    case "5255":
      return "../res/smuAu7N.png";

    case "5256":
      return "../res/ZPSk7PQ.png";

    case "5257":
      return "../res/KDugejE_qck.png";

    case "5258":
      return "../res/KDugejE_int.png";

    case "5259":
      return "../res/character_11532_t1.png";

    case "5260":
      return "../res/character_11533_t1.png";

    case "5261":
      return "../res/character_11534_t1_psy.png";

    case "5262":
      return "../res/character_11534_t1_int.png";

    case "5263":
      return "../res/character_11661_t1.png";

    case "5264":
      return "../res/character_11660_t1.png";

    case "5265":
      return "../res/character_11662_t1_dex.png";

    case "5266":
      return "../res/character_11662_t1_psy.png";

    case "5267":
      return "../res/character_11582_t1.png";

    case "5268":
      return "../res/character_11583_t1.png";

    case "5269":
      return "../res/character_11586_t1_str.png";

    case "5270":
      return "../res/character_11586_t1_psy.png";

    case "5271":
      return "../res/character_11584_t1.png";

    case "5272":
      return "../res/character_11585_t1.png";

    case "5273":
      return "../res/character_11587_t1_str.png";

    case "5274":
      return "../res/character_11587_t1_psy.png";

    case "5275":
      return "../res/character_11712_t1.png";

    case "5276":
      return "../res/character_11713_t1.png";

    case "5277":
      return "../res/character_11714_t1_str.png";

    case "5278":
      return "../res/character_11714_t1_psy.png";

    case "5279":
      return "../res/character_11673_t1.png";

    case "5280":
      return "../res/character_11674_t1.png";

    case "5281":
      return "../res/character_11675_t1.png";

    case "5282":
      return "../res/character_11676_t1.png";

    case "5283":
      return "../res/character_11851_t1.png";

    case "5284":
      return "../res/character_11852_t1.png";

    case "5285":
      return "../res/character_11855_t1_qck.png";

    case "5286":
      return "../res/character_11855_t1_dex.png";

    case "5287":
      return "../res/character_11853_t1.png";

    case "5288":
      return "../res/character_11854_t1.png";

    case "5289":
      return "../res/character_11856_t1_qck.png";

    case "5290":
      return "../res/character_11856_t1_dex.png";

    case "5291":
      return "../res/character_11857_t1.png";

    case "5292":
      return "../res/character_11858_t1.png";

    case "5293":
      return "../res/character_11861_t1_qck.png";

    case "5294":
      return "../res/character_11861_t1_psy.png";

    case "5295":
      return "../res/character_11859_t1.png";

    case "5296":
      return "../res/character_11860_t1.png";

    case "5297":
      return "../res/character_11862_t1_qck.png";

    case "5298":
      return "../res/character_11862_t1_psy.png";

    case "5299":
      return "../res/character_11904_t1.png";

    case "5300":
      return "../res/character_11905_t1.png";

    case "5301":
      return "../res/character_11908_t1_qck.png";

    case "5302":
      return "../res/character_11908_t1_dex.png";

    case "5303":
      return "../res/character_11906_t1.png";

    case "5304":
      return "../res/character_11907_t1.png";

    case "5305":
      return "../res/character_11909_t1_qck.png";

    case "5306":
      return "../res/character_11909_t1_dex.png";

    default:
  }
  return (
    "https://onepiece-treasurecruise.com/wp-content/uploads/f" + id + ".png"
  );
}
