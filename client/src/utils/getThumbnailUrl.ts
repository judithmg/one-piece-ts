import urls from "../constants/dbUrls";


export default function getThumbnailUrl(n: any) {
  switch (n) {
    case "skullLuffy":
    case 9001:
      return urls.avatarImg + "/skull_luffy.png";
    case "skullZoro":
    case 9002:
      return urls.avatarImg + "/skull_zoro.png";
    case "skullNami":
    case 9003:
      return urls.avatarImg + "/skull_nami.png";
    case "skullUsopp":
    case 9004:
      return urls.avatarImg + "/skull_usopp_f.png";
    case "skullSanji":
    case 9005:
      return urls.avatarImg + "/skull_sanji_f.png";
    case "skullChopper":
    case 9006:
      return urls.avatarImg + "/skull_chopper_f.png";
    case "skullRobin":
    case 9007:
      return urls.avatarImg + "/skull_robin_f.png";
    case "skullFranky":
    case 9008:
      return urls.avatarImg + "/skull_franky_f.png";
    case "skullBrook":
    case 9009:
      return urls.avatarImg + "/skull_brook_f.png";
    case "skullSTR":
    case 9010:
      return "";
    case "skullQCK":
    case 9011:
      return urls.avatarImg + "/blue_skull_f.png";
    case "skullPSY":
    case 9012:
      return urls.avatarImg + "/yellow_skull2_f.png";
    case "skullDEX":
    case 9013:
      return urls.avatarImg + "/green_skull2_f.png";
    case "skullINT":
    case 9014:
      return urls.avatarImg + "/black_skull_f.png";
    case "skullJudge":
    case 9015:
      return urls.avatarImg + "/Jerma_skull_f1.png";
    case "skullReiju":
    case 9016:
      return urls.avatarImg + "/Jerma_skull_f2.png";
    case "skullIchiji":
    case 9017:
      return urls.avatarImg + "/Jerma_skull_f3.png";
    case "skullNiji":
    case 9018:
      return urls.avatarImg + "/Jerma_skull_f4.png";
    case "skullYonji":
    case 9019:
      return urls.avatarImg + "/Jerma_skull_f5.png";
    case "skullDoffy":
    case 9020:
      return urls.avatarImg + "/Doflamingo_skull_f.png";
    case "skullEnel":
    case 9021:
      return urls.avatarImg + "/enel_skull_f.png";
    case "skullHiguma":
    case 9022:
      return urls.avatarImg + "/higuma_skull_f.png";
    case "skullSanji2":
    case 9023:
      return urls.avatarImg + "/sanji_skull_f.png";
    case "skullFrankie":
    case 9024:
      return urls.avatarImg + "/frankie_skull_f.png";
    case "skullCavendish":
    case 9025:
      return urls.avatarImg + "/Cavendish_skull_f.png";
    case "skullDoflamingo":
    case 9026:
      return urls.avatarImg + "/Doflamingo_skull_f2.png";
    case "skullIchiji2":
    case 9027:
      return urls.avatarImg + "/Jerma_skull_f6.png";
    case "skullNiji2":
    case 9028:
      return urls.avatarImg + "/Jerma_skull_f7.png";
    case "skullYonji2":
    case 9029:
      return urls.avatarImg + "/Jerma_skull_f8.png";
    case "skullReiju2":
    case 9030:
      return urls.avatarImg + "/Jerma_skull_f9.png";
    case "skullHancock":
    case 9031:
      return urls.avatarImg + "/Hancock_skull_f.png";
    case "skullNami2":
    case 9032:
      return urls.avatarImg + "/nami_skull_f.png";
    case "skullBullet":
    case 9033:
      return "https://optc-db.github.io/res/skullBullet.png";
    case "skullKatakuri":
    case 9034:
      return "https://optc-db.github.io/res/skullKatakuri.png";
    case "skullWhitebeard":
    case 9035:
      return "https://optc-db.github.io/res/skullWhitebeard.png";
    case "skullCP9":
    case 9036:
      return "https://optc-db.github.io/res/skullCP9.png";
    case "skullRaidKaido":
    case 9037:
      return "https://optc-db.github.io/res/skullKaidoRaid.png";
    case "skullBlackbeard":
    case 9038:
      return "https://optc-db.github.io/res/skullBlackbeard.png";
    case "skullZoro2":
    case 9039:
      return "https://optc-db.github.io/res/skullZoro2.png";
    case 9040:
      return "https://optc-db.github.io/res/skullSanji2.png";
    case "skullMihawk":
    case 9041:
      return "https://optc-db.github.io/res/skullMihawk.png";
    case 9042:
      return "https://optc-db.github.io/res/skullNami2.png";
    default:
  }
  if (n === null || n === undefined)
    return "https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png";

  var id = ("0000" + n).slice(-4).replace(/(057[54])/, "0$1"); // missing aokiji image
  switch (id) {
    case "0742":
      return urls.avatarImg + "/f0742-2.png";

    case "3000":
      return urls.avatarImg + "/f3000_1.png";

    case "3333":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5013.png";

    case "3334":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png";

    case "3339":
      return urls.avatarImgGit + "_10852_t1.png";

    case "3340":
      return urls.avatarImgGit + "_10853_t1.png";

    case "3347":
      return urls.avatarImgGit + "_1508_t1.png";

    case "3348":
      return urls.avatarImgGit + "_1509_t1.png";

    case "3349":
      return urls.avatarImgGit + "_1510_t1.png";

    case "3350":
      return urls.avatarImgGit + "_1511_t1.png";

    case "3351":
      return urls.avatarImgGit + "_10861_t1.png";

    case "3352":
      return urls.avatarImgGit + "_10862_t1.png";

    case "3353":
      return urls.avatarImgGit + "_10994_t1.png";

    case "3354":
      return urls.avatarImgGit + "_10995_t1.png";

    case "3356":
      return urls.avatarImgGit + "_10869_t1.png";

    case "3357":
      return urls.avatarImgGit + "_10870_t1.png";

    case "3358":
      return urls.avatarImgGit + "_10867_t1.png";

    case "3359":
      return urls.avatarImgGit + "_10868_t1.png";

    case "3360":
      return urls.avatarImgGit + "_11037_t1.png";

    case "3361":
      return urls.avatarImgGit + "_11038_t1.png";

    case "2768":
      return urls.avatarImgGit + "_10258_t1.png";

    case "2769":
      return urls.avatarImgGit + "_10259_t1.png";

    case "2770":
      return urls.avatarImgGit + "_10262_t1.png";

    case "2771":
      return urls.avatarImgGit + "_10263_t1.png";

    case "3366":
      return urls.avatarImgGit + "_10858_t1.png";

    case "3367":
      return urls.avatarImgGit + "_10859_t1.png";

    case "3368":
      return urls.avatarImgGit + "_10860_t1.png";

    case "3370":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5052.png";

    case "3371":
      return urls.avatarImgGit + "_11243_t.png";

    case "3372":
      return urls.avatarImgGit + "_11244_t.png";

    case "3373":
      return urls.avatarImgGit + "_11245_t.png";

    case "3374":
      return "http://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5053.png";

    case "3375":
      return urls.avatarImgGit + "_10863_t.png";

    case "3376":
      return urls.avatarImgGit + "_10864_t.png";

    case "3380":
      return urls.avatarImgGit + "_11333_t1.png";

    case "3381":
      return "https://optc-db.github.io/res/KDugejE.png";

    case "3382":
      return urls.avatarImgGit + "_11615_t1.png";

    case "3383":
      return urls.avatarImgGit + "_11760_t.png";

    case "3384":
      return urls.avatarImgGit + "_11400_t1.png";

    case "3385":
      return urls.avatarImgGit + "_11338_t1.png";

    case "5000":
      return urls.avatarImgGit + "_10185_t1.png";

    case "5001":
      return urls.avatarImgGit + "_10186_t1.png";

    case "5002":
      return urls.avatarImgGit + "_10187_t1_int.png";

    case "5003":
      return urls.avatarImgGit + "_10187_t1_psy.png";

    case "5004":
      return urls.avatarImgGit + "_10173_t1.png";

    case "5005":
      return urls.avatarImgGit + "_10174_t1.png";

    case "5006":
      return urls.avatarImgGit + "_10177_t1_qck.png";

    case "5007":
      return urls.avatarImgGit + "_10177_t1_str.png";

    case "5008":
      return urls.avatarImgGit + "_10175_t1.png";

    case "5009":
      return urls.avatarImgGit + "_10176_t1.png";

    case "5010":
      return urls.avatarImgGit + "_10178_t1_qck.png";

    case "5011":
      return urls.avatarImgGit + "_10178_t1_str.png";

    case "5012":
      return urls.avatarImgGit + "_10181_t1.png";

    case "5013":
      return urls.avatarImgGit + "_10182_t1.png";

    case "5014":
      return urls.avatarImgGit + "_10183_t1_psy.png";

    case "5015":
      return urls.avatarImgGit + "_10183_t1_dex.png";

    case "5016":
      return urls.avatarImgGit + "_10344_t1.png";

    case "5017":
      return urls.avatarImgGit + "_10345_t1.png";

    case "5018":
      return urls.avatarImgGit + "_10348_t1_psy.png";

    case "5019":
      return urls.avatarImgGit + "_10348_t1_int.png";

    case "5020":
      return urls.avatarImgGit + "_10346_t1.png";

    case "5021":
      return urls.avatarImgGit + "_10347_t1.png";

    case "5022":
      return urls.avatarImgGit + "_10349_t1_psy.png";

    case "5023":
      return urls.avatarImgGit + "_10349_t1_int.png";

    case "5024":
      return urls.avatarImgGit + "_10496_t1.png";

    case "5025":
      return urls.avatarImgGit + "_10497_t1.png";

    case "5026":
      return urls.avatarImgGit + "_10498_t1_dex.png";

    case "5027":
      return urls.avatarImgGit + "_10498_t1_str.png";

    case "5028":
      return urls.avatarImgGit + "_10636_t1.png";

    case "5029":
      return urls.avatarImgGit + "_10637_t1.png";

    case "5030":
      return urls.avatarImgGit + "_10640_t1_int.png";

    case "5031":
      return urls.avatarImgGit + "_10640_t1_dex.png";

    case "5032":
      return urls.avatarImgGit + "_10638_t1.png";

    case "5033":
      return urls.avatarImgGit + "_10639_t1.png";

    case "5034":
      return urls.avatarImgGit + "_10641_t1_int.png";

    case "5035":
      return urls.avatarImgGit + "_10641_t1_dex.png";

    case "5036":
      return urls.avatarImgGit + "_10649_t1.png";

    case "5037":
      return urls.avatarImgGit + "_10650_t1.png";

    case "5038":
      return urls.avatarImgGit + "_10653_t1_dex.png";

    case "5039":
      return urls.avatarImgGit + "_10653_t1_qck.png";

    case "5040":
      return urls.avatarImgGit + "_10651_t1.png";

    case "5041":
      return urls.avatarImgGit + "_10652_t1.png";

    case "5042":
      return urls.avatarImgGit + "_10654_t1_dex.png";

    case "5043":
      return urls.avatarImgGit + "_10654_t1_qck.png";

    //case '2818': return 'https://optc-db.github.io/res/character_10707_t1.png';
    //case '2819': return 'https://optc-db.github.io/res/character_10708_t1.png';
    case "5044":
      return urls.avatarImgGit + "_10703_t.png";

    case "5045":
      return urls.avatarImgGit + "_10704_t.png";

    case "5046":
      return urls.avatarImgGit + "_10707_t1_qck.png";

    case "5047":
      return urls.avatarImgGit + "_10707_t1_int.png";

    case "5048":
      return urls.avatarImgGit + "_10705_t.png";

    case "5049":
      return urls.avatarImgGit + "_10706_t.png";

    case "5050":
      return urls.avatarImgGit + "_10708_t1_qck.png";

    case "5051":
      return urls.avatarImgGit + "_10708_t1_int.png";

    case "5052":
      return urls.avatarImgGit + "_10720_t1.png";

    case "5053":
      return urls.avatarImgGit + "_10721_t1.png";

    case "5054":
      return urls.avatarImgGit + "_10724_t1_psy.png";

    case "5055":
      return urls.avatarImgGit + "_10722_t1.png";

    case "5056":
      return urls.avatarImgGit + "_10723_t1.png";

    case "5057":
      return urls.avatarImgGit + "_10725_t1_psy.png";

    case "5058":
      return urls.avatarImgGit + "_10735_t1.png";

    case "5059":
      return urls.avatarImgGit + "_10736_t1.png";

    case "5060":
      return urls.avatarImgGit + "_10739_t1_psy.png";

    case "5061":
      return urls.avatarImgGit + "_10739_t1_qck.png";

    case "5062":
      return urls.avatarImgGit + "_10737_t1.png";

    case "5063":
      return urls.avatarImgGit + "_10738_t1.png";

    case "5064":
      return urls.avatarImgGit + "_10740_t1_psy.png";

    case "5065":
      return urls.avatarImgGit + "_10740_t1_qck.png";

    case "5066":
      return urls.avatarImgGit + "_10832_t1.png";

    case "5067":
      return urls.avatarImgGit + "_10833_t1.png";

    case "5068":
      return urls.avatarImgGit + "_10836_t1_int.png";

    case "5069":
      return urls.avatarImgGit + "_10836_t1_qck.png";

    case "5070":
      return urls.avatarImgGit + "_10834_t1.png";

    case "5071":
      return urls.avatarImgGit + "_10835_t1.png";

    case "5072":
      return urls.avatarImgGit + "_10837_t1_int.png";

    case "5073":
      return urls.avatarImgGit + "_10837_t1_qck.png";

    case "5074":
      return urls.avatarImgGit + "_10950_t1.png";

    case "5075":
      return urls.avatarImgGit + "_10951_t1.png";

    case "5076":
      return urls.avatarImgGit + "_10952_t1_dex.png";

    case "5077":
      return urls.avatarImgGit + "_10952_t1_qck.png";

    case "5078":
      return urls.avatarImgGit + "_10773_t1.png";

    case "5079":
      return urls.avatarImgGit + "_10774_t1.png";

    case "5080":
      return urls.avatarImgGit + "_10775_t1_int.png";

    case "5081":
      return urls.avatarImgGit + "_10775_t1_qck.png";

    case "5082":
      return urls.avatarImgGit + "_10784_t1.png";

    case "5083":
      return urls.avatarImgGit + "_10785_t1.png";

    case "5084":
      return urls.avatarImgGit + "_10788_t1_dex.png";

    case "5085":
      return urls.avatarImgGit + "_10788_t1_qck.png";

    case "5086":
      return urls.avatarImgGit + "_10786_t1.png";

    case "5087":
      return urls.avatarImgGit + "_10787_t1.png";

    case "5088":
      return urls.avatarImgGit + "_10789_t1_dex.png";

    case "5089":
      return urls.avatarImgGit + "_10789_t1_qck.png";

    case "5090":
      return urls.avatarImgGit + "_10816_t1.png";

    case "5091":
      return urls.avatarImgGit + "_10817_t1.png";

    case "5092":
      return urls.avatarImgGit + "_10820_t1_int.png";

    case "5093":
      return urls.avatarImgGit + "_10818_t1.png";

    case "5094":
      return urls.avatarImgGit + "_10819_t1.png";

    case "5095":
      return urls.avatarImgGit + "_10821_t1_int.png";

    case "5096":
      return urls.avatarImgGit + "_10871_t1.png";

    case "5097":
      return urls.avatarImgGit + "_10872_t1.png";

    case "5098":
      return urls.avatarImgGit + "_10875_t1_str.png";

    case "5099":
      return urls.avatarImgGit + "_10875_t1_dex.png";

    case "5100":
      return urls.avatarImgGit + "_10873_t1.png";

    case "5101":
      return urls.avatarImgGit + "_10874_t1.png";

    case "5102":
      return urls.avatarImgGit + "_10876_t1_str.png";

    case "5103":
      return urls.avatarImgGit + "_10876_t1_dex.png";

    case "5104":
      return urls.avatarImgGit + "_10877_t1.png";

    case "5105":
      return urls.avatarImgGit + "_10878_t1.png";

    case "5106":
      return urls.avatarImgGit + "_10881_t1_psy.png";

    case "5107":
      return urls.avatarImgGit + "_10881_t1_str.png";

    case "5108":
      return urls.avatarImgGit + "_10879_t1.png";

    case "5109":
      return urls.avatarImgGit + "_10880_t1.png";

    case "5110":
      return urls.avatarImgGit + "_10882_t1_psy.png";

    case "5111":
      return urls.avatarImgGit + "_10882_t1_str.png";

    case "5112":
      return urls.avatarImgGit + "_10883_t1.png";

    case "5113":
      return urls.avatarImgGit + "_10884_t1.png";

    case "5114":
      return urls.avatarImgGit + "_10887_t1_qck.png";

    case "5115":
      return urls.avatarImgGit + "_10887_t1_psy.png";

    case "5116":
      return urls.avatarImgGit + "_10885_t1.png";

    case "5117":
      return urls.avatarImgGit + "_10886_t1.png";

    case "5118":
      return urls.avatarImgGit + "_10888_t1_qck.png";

    case "5119":
      return urls.avatarImgGit + "_10888_t1_psy.png";

    case "5120":
      return urls.avatarImgGit + "_10826_t1.png";

    case "5121":
      return urls.avatarImgGit + "_10827_t1.png";

    case "5122":
      return urls.avatarImgGit + "_10830_t1_dex.png";

    case "5123":
      return urls.avatarImgGit + "_10830_t1_int.png";

    case "5124":
      return urls.avatarImgGit + "_10828_t1.png";

    case "5125":
      return urls.avatarImgGit + "_10829_t1.png";

    case "5126":
      return urls.avatarImgGit + "_10831_t1_dex.png";

    case "5127":
      return urls.avatarImgGit + "_10831_t1_int.png";

    case "5128":
      return urls.avatarImgGit + "_10778_t1.png";

    case "5129":
      return urls.avatarImgGit + "_10779_t1.png";

    case "5130":
      return urls.avatarImgGit + "_10782_t1_str.png";

    case "5131":
      return urls.avatarImgGit + "_10782_t1_dex.png";

    case "5132":
      return urls.avatarImgGit + "_10780_t1.png";

    case "5133":
      return urls.avatarImgGit + "_10781_t1.png";

    case "5134":
      return urls.avatarImgGit + "_10783_t1_str.png";

    case "5135":
      return urls.avatarImgGit + "_10783_t1_dex.png";

    case "5136":
      return urls.avatarImgGit + "_10895_t1.png";

    case "5137":
      return urls.avatarImgGit + "_10896_t1.png";

    case "5138":
      return urls.avatarImgGit + "_10899_t1_int.png";

    case "5139":
      return urls.avatarImgGit + "_10899_t1_dex.png";

    case "5140":
      return urls.avatarImgGit + "_10897_t1.png";

    case "5141":
      return urls.avatarImgGit + "_10898_t1.png";

    case "5142":
      return urls.avatarImgGit + "_10900_t1_int.png";

    case "5143":
      return urls.avatarImgGit + "_10900_t1_dex.png";

    case "5144":
      return urls.avatarImgGit + "_10910_t1.png";

    case "5145":
      return urls.avatarImgGit + "_10911_t1.png";

    case "5146":
      return urls.avatarImgGit + "_10914_t1_str.png";

    case "5147":
      return urls.avatarImgGit + "_10914_t1_int.png";

    case "5148":
      return urls.avatarImgGit + "_10912_t1.png";

    case "5149":
      return urls.avatarImgGit + "_10913_t1.png";

    case "5150":
      return urls.avatarImgGit + "_10915_t1_str.png";

    case "5151":
      return urls.avatarImgGit + "_10915_t1_int.png";

    case "5152":
      return urls.avatarImgGit + "_10916_t1.png";

    case "5153":
      return urls.avatarImgGit + "_10917_t1.png";

    case "5154":
      return urls.avatarImgGit + "_10920_t1_str.png";

    case "5155":
      return urls.avatarImgGit + "_10920_t1_psy.png";

    case "5156":
      return urls.avatarImgGit + "_10918_t1.png";

    case "5157":
      return urls.avatarImgGit + "_10919_t1.png";

    case "5158":
      return urls.avatarImgGit + "_10921_t1_str.png";

    case "5159":
      return urls.avatarImgGit + "_10921_t1_psy.png";

    case "5160":
      return urls.avatarImgGit + "_10954_t1.png";

    case "5161":
      return urls.avatarImgGit + "_10955_t1.png";

    case "5162":
      return urls.avatarImgGit + "_10958_t1_dex.png";

    case "5163":
      return urls.avatarImgGit + "_10958_t1_str.png";

    case "5164":
      return urls.avatarImgGit + "_10956_t1.png";

    case "5165":
      return urls.avatarImgGit + "_10957_t1.png";

    case "5166":
      return urls.avatarImgGit + "_10959_t1_dex.png";

    case "5167":
      return urls.avatarImgGit + "_10959_t1_str.png";

    case "5168":
      return urls.avatarImgGit + "_10960_t1.png";

    case "5169":
      return urls.avatarImgGit + "_10961_t1.png";

    case "5170":
      return urls.avatarImgGit + "_10964_t1_int.png";

    case "5171":
      return urls.avatarImgGit + "_10964_t1_psy.png";

    case "5172":
      return urls.avatarImgGit + "_10962_t1.png";

    case "5173":
      return urls.avatarImgGit + "_10963_t1.png";

    case "5174":
      return urls.avatarImgGit + "_10965_t1_int.png";

    case "5175":
      return urls.avatarImgGit + "_10965_t1_psy.png";

    case "5176":
      return urls.avatarImgGit + "_10803_t1.png";

    case "5177":
      return urls.avatarImgGit + "_10804_t1.png";

    case "5178":
      return urls.avatarImgGit + "_10805_t1_str.png";

    case "5179":
      return urls.avatarImgGit + "_10805_t1_int.png";

    case "5180":
      return urls.avatarImgGit + "_10889_t1.png";

    case "5181":
      return urls.avatarImgGit + "_10890_t1.png";

    case "5182":
      return urls.avatarImgGit + "_10891_t1_dex.png";

    case "5183":
      return urls.avatarImgGit + "_10891_t1_qck.png";

    case "5184":
      return urls.avatarImgGit + "_11099_t1.png";

    case "5185":
      return urls.avatarImgGit + "_11100_t1.png";

    case "5186":
      return urls.avatarImgGit + "_11102_t1_qck.png";

    case "5187":
      return urls.avatarImgGit + "_11166_t1.png";

    case "5188":
      return urls.avatarImgGit + "_11167_t1.png";

    case "5189":
      return urls.avatarImgGit + "_11168_t1_psy.png";

    case "5190":
      return urls.avatarImgGit + "_11168_t1_int.png";

    case "5191":
      return urls.avatarImgGit + "_11187_t1.png";

    case "5192":
      return urls.avatarImgGit + "_11188_t1.png";

    case "5193":
      return urls.avatarImgGit + "_11191_t1_str.png";

    case "5194":
      return urls.avatarImgGit + "_11191_t1_dex.png";

    case "5195":
      return urls.avatarImgGit + "_11189_t1.png";

    case "5196":
      return urls.avatarImgGit + "_11190_t1.png";

    case "5197":
      return urls.avatarImgGit + "_11192_t1_str.png";

    case "5198":
      return urls.avatarImgGit + "_11192_t1_dex.png";

    case "5199":
      return urls.avatarImgGit + "_11129_t1.png";

    case "5200":
      return urls.avatarImgGit + "_11130_t1.png";

    case "5201":
      return urls.avatarImgGit + "_11131_t1_str.png";

    case "5202":
      return urls.avatarImgGit + "_11227_t1.png";

    case "5203":
      return urls.avatarImgGit + "_11228_t1.png";

    case "5204":
      return urls.avatarImgGit + "_11231_t1_dex.png";

    case "5205":
      return urls.avatarImgGit + "_11231_t1_int.png";

    case "5206":
      return urls.avatarImgGit + "_11229_t1.png";

    case "5207":
      return urls.avatarImgGit + "_11230_t1.png";

    case "5208":
      return urls.avatarImgGit + "_11232_t1_dex.png";

    case "5209":
      return urls.avatarImgGit + "_11232_t1_int.png";

    case "5210":
      return urls.avatarImgGit + "_11260_t1.png";

    case "5211":
      return urls.avatarImgGit + "_11261_t1.png";

    case "5212":
      return urls.avatarImgGit + "_11262_t1_dex.png";

    case "5213":
      return urls.avatarImgGit + "_11262_t1_int.png";

    case "5214":
      return urls.avatarImgGit + "_11254_t1.png";

    case "5215":
      return urls.avatarImgGit + "_11255_t1.png";

    case "5216":
      return urls.avatarImgGit + "_11258_t1_str.png";

    case "5217":
      return urls.avatarImgGit + "_11256_t1.png";

    case "5218":
      return urls.avatarImgGit + "_11257_t1.png";

    case "5219":
      return urls.avatarImgGit + "_11259_t1_str.png";

    case "5220":
      return urls.avatarImgGit + "_11306_t1.png";

    case "5221":
      return urls.avatarImgGit + "_11307_t1.png";

    case "5222":
      return urls.avatarImgGit + "_11310_t1_psy.png";

    case "5223":
      return urls.avatarImgGit + "_11310_t1_qck.png";

    case "5224":
      return urls.avatarImgGit + "_11308_t1.png";

    case "5225":
      return urls.avatarImgGit + "_11309_t1.png";

    case "5226":
      return urls.avatarImgGit + "_11311_t1_psy.png";

    case "5227":
      return urls.avatarImgGit + "_11311_t1_qck.png";

    case "5228":
      return urls.avatarImgGit + "_11318_t1.png";

    case "5229":
      return urls.avatarImgGit + "_11319_t1.png";

    case "5230":
      return urls.avatarImgGit + "_11322_t1_str.png";

    case "5231":
      return urls.avatarImgGit + "_11322_t1_qck.png";

    case "5232":
      return urls.avatarImgGit + "_11320_t1.png";

    case "5233":
      return urls.avatarImgGit + "_11321_t1.png";

    case "5234":
      return urls.avatarImgGit + "_11323_t1_str.png";

    case "5235":
      return urls.avatarImgGit + "_11323_t1_qck.png";

    case "5236":
      return urls.avatarImgGit + "_11324_t1.png";

    case "5237":
      return urls.avatarImgGit + "_11325_t1.png";

    case "5238":
      return urls.avatarImgGit + "_11328_t1_qck.png";

    case "5239":
      return urls.avatarImgGit + "_11328_t1_dex.png";

    case "5240":
      return urls.avatarImgGit + "_11326_t1.png";

    case "5241":
      return urls.avatarImgGit + "_11327_t1.png";

    case "5242":
      return urls.avatarImgGit + "_11329_t1_qck.png";

    case "5243":
      return urls.avatarImgGit + "_11329_t1_dex.png";

    case "5244":
      return urls.avatarImgGit + "_11314_t1.png";

    case "5245":
      return urls.avatarImgGit + "_11315_t1.png";

    case "5246":
      return urls.avatarImgGit + "_11317_t1_int.png";

    case "5247":
      return urls.avatarImgGit + "_11371_t1.png";

    case "5248":
      return urls.avatarImgGit + "_11372_t1.png";

    case "5249":
      return urls.avatarImgGit + "_11375_t1_str.png";

    case "5250":
      return urls.avatarImgGit + "_11375_t1_psy.png";

    case "5251":
      return urls.avatarImgGit + "_11373_t1.png";

    case "5252":
      return urls.avatarImgGit + "_11374_t1.png";

    case "5253":
      return urls.avatarImgGit + "_11376_t1_str.png";

    case "5254":
      return urls.avatarImgGit + "_11376_t1_psy.png";

    case "5255":
      return "https://optc-db.github.io/res/smuAu7N.png";

    case "5256":
      return "https://optc-db.github.io/res/ZPSk7PQ.png";

    case "5257":
      return "https://optc-db.github.io/res/KDugejE_qck.png";

    case "5258":
      return "https://optc-db.github.io/res/KDugejE_int.png";

    case "5259":
      return urls.avatarImgGit + "_11532_t1.png";

    case "5260":
      return urls.avatarImgGit + "_11533_t1.png";

    case "5261":
      return urls.avatarImgGit + "_11534_t1_psy.png";

    case "5262":
      return urls.avatarImgGit + "_11534_t1_int.png";

    case "5263":
      return urls.avatarImgGit + "_11661_t1.png";

    case "5264":
      return urls.avatarImgGit + "_11660_t1.png";

    case "5265":
      return urls.avatarImgGit + "_11662_t1_dex.png";

    case "5266":
      return urls.avatarImgGit + "_11662_t1_psy.png";

    case "5267":
      return urls.avatarImgGit + "_11582_t1.png";

    case "5268":
      return urls.avatarImgGit + "_11583_t1.png";

    case "5269":
      return urls.avatarImgGit + "_11586_t1_str.png";

    case "5270":
      return urls.avatarImgGit + "_11586_t1_psy.png";

    case "5271":
      return urls.avatarImgGit + "_11584_t1.png";

    case "5272":
      return urls.avatarImgGit + "_11585_t1.png";

    case "5273":
      return urls.avatarImgGit + "_11587_t1_str.png";

    case "5274":
      return urls.avatarImgGit + "_11587_t1_psy.png";

    case "5275":
      return urls.avatarImgGit + "_11712_t1.png";

    case "5276":
      return urls.avatarImgGit + "_11713_t1.png";

    case "5277":
      return urls.avatarImgGit + "_11714_t1_str.png";

    case "5278":
      return urls.avatarImgGit + "_11714_t1_psy.png";

    case "5279":
      return urls.avatarImgGit + "_11673_t1.png";

    case "5280":
      return urls.avatarImgGit + "_11674_t1.png";

    case "5281":
      return urls.avatarImgGit + "_11675_t1.png";

    case "5282":
      return urls.avatarImgGit + "_11676_t1.png";

    case "5283":
      return urls.avatarImgGit + "_11851_t1.png";

    case "5284":
      return urls.avatarImgGit + "_11852_t1.png";

    case "5285":
      return urls.avatarImgGit + "_11855_t1_qck.png";

    case "5286":
      return urls.avatarImgGit + "_11855_t1_dex.png";

    case "5287":
      return urls.avatarImgGit + "_11853_t1.png";

    case "5288":
      return urls.avatarImgGit + "_11854_t1.png";

    case "5289":
      return urls.avatarImgGit + "_11856_t1_qck.png";

    case "5290":
      return urls.avatarImgGit + "_11856_t1_dex.png";

    case "5291":
      return urls.avatarImgGit + "_11857_t1.png";

    case "5292":
      return urls.avatarImgGit + "_11858_t1.png";

    case "5293":
      return urls.avatarImgGit + "_11861_t1_qck.png";

    case "5294":
      return urls.avatarImgGit + "_11861_t1_psy.png";

    case "5295":
      return urls.avatarImgGit + "_11859_t1.png";

    case "5296":
      return urls.avatarImgGit + "_11860_t1.png";

    case "5297":
      return urls.avatarImgGit + "_11862_t1_qck.png";

    case "5298":
      return urls.avatarImgGit + "_11862_t1_psy.png";

    case "5299":
      return urls.avatarImgGit + "_11904_t1.png";

    case "5300":
      return urls.avatarImgGit + "_11905_t1.png";

    case "5301":
      return urls.avatarImgGit + "_11908_t1_qck.png";

    case "5302":
      return urls.avatarImgGit + "_11908_t1_dex.png";

    case "5303":
      return urls.avatarImgGit + "_11906_t1.png";

    case "5304":
      return urls.avatarImgGit + "_11907_t1.png";

    case "5305":
      return urls.avatarImgGit + "_11909_t1_qck.png";

    case "5306":
      return urls.avatarImgGit + "_11909_t1_dex.png";

    default:
  }
  return (
    urls.avatarImg + "/f" + id + ".png"
  );
}
