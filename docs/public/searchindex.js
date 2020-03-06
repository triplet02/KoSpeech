Search.setIndex({docnames:["Dataset","Distance","Evaluator","Feature","Hparams","Label","Load","Loader","Loss","Lr","Models","Save","Trainer","index","notes/More-details","notes/Preparation","notes/intro"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["Dataset.rst","Distance.rst","Evaluator.rst","Feature.rst","Hparams.rst","Label.rst","Load.rst","Loader.rst","Loss.rst","Lr.rst","Models.rst","Save.rst","Trainer.rst","index.rst","notes\\More-details.md","notes\\Preparation.md","notes\\intro.md"],objects:{"models.attention":{Attention:[10,1,1,""]},"models.attention.Attention":{forward:[10,2,1,""]},"models.beam":{Beam:[10,1,1,""]},"models.beam.Beam":{search:[10,2,1,""]},"models.listenAttendSpell":{ListenAttendSpell:[10,1,1,""]},"models.listenAttendSpell.ListenAttendSpell":{forward:[10,2,1,""]},"models.listener":{Listener:[10,1,1,""],PyramidalRNN:[10,1,1,""]},"models.listener.Listener":{conv:[10,3,1,""],flatten_parameters:[10,2,1,""],forward:[10,2,1,""]},"models.listener.PyramidalRNN":{forward:[10,2,1,""]},"models.speller":{Speller:[10,1,1,""]},"models.speller.Speller":{forward:[10,2,1,""]},"train.evaluator":{evaluate:[2,4,1,""]},"train.loss":{LabelSmoothingLoss:[8,1,1,""]},"train.loss.LabelSmoothingLoss":{forward:[8,2,1,""]},"train.lr":{exp_decay:[9,4,1,""],get_lr:[9,4,1,""],ramp_up:[9,4,1,""],set_lr:[9,4,1,""]},"train.trainer":{train:[12,4,1,""]},"utils.dataset":{BaseDataset:[0,1,1,""],split_dataset:[0,4,1,""]},"utils.dataset.BaseDataset":{augmentation:[0,2,1,""],batch_shuffle:[0,2,1,""],shuffle:[0,2,1,""],sort_by_length:[0,2,1,""]},"utils.distance":{char_distance:[1,4,1,""],get_distance:[1,4,1,""]},"utils.feature":{get_librosa_melspectrogram:[3,4,1,""],get_librosa_mfcc:[3,4,1,""],spec_augment:[3,4,1,""]},"utils.hparams":{HyperParams:[4,1,1,""]},"utils.label":{get_label:[5,4,1,""],label_to_string:[5,4,1,""]},"utils.load":{load_data_list:[6,4,1,""],load_label:[6,4,1,""],load_pickle:[6,4,1,""],load_targets:[6,4,1,""]},"utils.loader":{BaseDataLoader:[7,1,1,""],MultiLoader:[7,1,1,""]},"utils.loader.BaseDataLoader":{run:[7,2,1,""]},"utils.save":{save_epoch_result:[11,4,1,""],save_pickle:[11,4,1,""],save_step_result:[11,4,1,""]},models:{attention:[10,0,0,"-"],beam:[10,0,0,"-"],listenAttendSpell:[10,0,0,"-"],listener:[10,0,0,"-"],speller:[10,0,0,"-"]},train:{evaluator:[2,0,0,"-"],loss:[8,0,0,"-"],lr:[9,0,0,"-"],trainer:[12,0,0,"-"]},utils:{dataset:[0,0,0,"-"],distance:[1,0,0,"-"],feature:[3,0,0,"-"],hparams:[4,0,0,"-"],label:[5,0,0,"-"],load:[6,0,0,"-"],loader:[7,0,0,"-"],save:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"000\uac1c\uc529\uc758":15,"000\uc2dc\uac04":15,"000\uc2dc\uac04\uc758":14,"000\uc5ec\uba85\uc774":15,"040\uac1c\uc758":[14,15],"10m":[3,14],"123gb\ub85c":15,"124\uac1c\uc758":15,"15m":3,"16k":14,"1\ubc88\ub9cc":15,"1\ubc88\ubd80\ud130":15,"1\ubc88\uc529":15,"20\uc2dc\uac04\uc744":15,"20h":[14,15],"25m":[3,14],"297\uac1c\ub294":15,"297\uac1c\ub85c":15,"300\uac1c":15,"300\uc5ec\uac1c\uc758":15,"30m":3,"340\uac1c\uc758":14,"3\uac1c\uc758":15,"3\ud559\ub144":15,"5\uac1c\uc758":15,"5ms":3,"60\ub9cc\uac1c\uac00":15,"622545\ubc88\uae4c\uc9c0":15,"980\uc2dc\uac04\uc744":15,"980h":[14,15],"\uac00":15,"\uac00\uc838\uc640\uc8fc\ub294":15,"\uac01":15,"\uac04\ud22c\uc5b4":[14,15],"\uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4":15,"\uac17":15,"\uac19\ub2e4":15,"\uac19\uc740":15,"\uac19\uc774":15,"\uac1c\uc218\ub294":15,"\uac1c\uc218\uc758":15,"\uac1c\uc758":15,"\uac70\ucce4\ub2e4":15,"\uac74\uac00":15,"\uac83\uc744":15,"\uac83\uc774":15,"\uac83\uc774\uae30":15,"\uac83\uc774\ub2e4":15,"\uac83\uc774\ub77c\uace0":15,"\uacb0\uacfc":15,"\uacbd\ub85c\ub97c":15,"\uacc4\uc0b0\ud574\uc8fc\uace0":15,"\uace0\ubbfc\ud588\ub2e4":15,"\uacfc\uc815\uc744":15,"\uad1e":15,"\uad6c\ubd84\ud574\uc8fc\uc5c8\ub2e4":15,"\uad6c\uc131\ub418\uc5b4":15,"\uad6c\uc131\ud588\ub2e4":15,"\uad6d\uac00\uc7a5\ud559\uae08":15,"\uadf8":[14,15],"\uadf8\ub798\uc11c":15,"\uadf8\ub7ec\uae30":15,"\uadf8\ub7fc":15,"\uadf8\ub9ac\uace0":15,"\uadfc\ub370":15,"\uae00\uc740":15,"\uae00\uc785\ub2c8\ub2e4":15,"\uae03":15,"\uae30\ub85d\ud55c":15,"\uae30\ubcf8":15,"\uae30\ubcf8\uc801\uc73c\ub85c":15,"\uae30\uc874":15,"\uae4c\uc9c0\ub294":15,"\uae4c\uc9c0\uc758":15,"\ub098\uba38\uc9c0":15,"\ub098\uc744":15,"\ub118\ub294":15,"\ub123\uc5b4\uc900\ub2e4":15,"\ub123\uc5c8\uc73c\ubbc0\ub85c":15,"\ub178\uc774\uc988":15,"\ub178\uc774\uc988\uac00":15,"\ub2e4\ub154\ub358":15,"\ub2e4\uc2dc":15,"\ub2e4\uc6b4\ub85c\ub4dc":15,"\ub2e4\uc74c":15,"\ub2e4\uc74c\uacfc":15,"\ub2e4\uc74c\uc73c\ub85c":15,"\ub2e4\uc74c\uc740":15,"\ub2e8\uc704\ub85c":15,"\ub300\ud558\uc5ec":15,"\ub300\ud55c":15,"\ub300\ud574":15,"\ub354":15,"\ub354\ub4ec\ub294":15,"\ub370\uc774\ud130":[14,15],"\ub370\uc774\ud130\ub294":15,"\ub370\uc774\ud130\ub85c":15,"\ub370\uc774\ud130\uc14b\uc5d0":15,"\ub370\uc774\ud130\uc14b\uc5d0\uc11c":[14,15],"\ub370\uc774\ud130\uc14b\uc758":15,"\ub370\uc774\ud130\uc14b\uc774":15,"\ub418\ub294":15,"\ub418\uba74":15,"\ub418\uc5b4":15,"\ub418\uc5c8\ub2e4":15,"\ub41c\ub2e4":15,"\ub420":15,"\ub454":15,"\ub4a4":15,"\ub4e4\uc5b4\ubcf4\uac8c":15,"\ub4f1":15,"\ub4f1\uc744":[14,15],"\ub4f1\uc758":[14,15],"\ub4f1\uc7a5\ud558\ub294":15,"\ub4f1\uc7a5\ud55c":[14,15],"\ub515\uc154\ub108\ub9ac":15,"\ub54c":15,"\ub54c\ubb38\uc5d0":15,"\ub744\uc5b4\uc4f0\uae30\ub294":15,"\ub744\uc5b4\uc4f0\uae30\ub85c":15,"\ub79c\ub364\ud558\uac8c":15,"\ub808\uc774\ube14":[14,15],"\ub808\uc774\ube14\ub85c":15,"\ub808\uc774\ube14\ub85c\uc758":15,"\ub808\uc774\ube14\ub9c1":15,"\ub808\uc774\ube14\uc740":15,"\ub808\uc774\ube14\uc744":15,"\ub808\uc774\ube14\uc774":15,"\ub85c":15,"\ub97c":15,"\ub9ac\uc2a4\ud2b8":[14,15],"\ub9ac\uc2a4\ud2b8\ub97c":15,"\ub9ac\uc2a4\ud2b8\uc5d0":15,"\ub9c1\ud06c":15,"\ub9c1\ud06c\uc5d0\uc11c":15,"\ub9c8\uc9c0\ub9c9\uc5d0":15,"\ub9c8\ucce4\ub2e4":15,"\ub9cc":14,"\ub9cc\ub4dc\ub294":15,"\ub9cc\ub4e0":15,"\ub9cc\ub4e0\ub2e4":15,"\ub9cc\ub4e4\uc5b4":15,"\ub9cc\ub4e4\uc5b4\ub454":15,"\ub9cc\ub4e4\uc5b4\ubcf4\uc790":15,"\ub9cc\ub4e4\uc5b4\uc900\ub2e4":15,"\ub9de\ucdb0\uc8fc\uae30":15,"\ub9de\ucdb0\uc8fc\ub294":15,"\uba3c\uc800":15,"\uba54\uc11c\ub4dc\ub85c":15,"\ubaa8":[14,15],"\ubaa8\ub450":15,"\ubaa8\ub4e0":15,"\ubaa8\uc544\uc11c":15,"\ubaa9\ud45c\uc600\uae30\uc5d0":15,"\ubaac":[14,15],"\ubb34\uc2dc\ud558\uace0":15,"\ubb38\uc758\uc0ac\ud56d":15,"\ubb38\uc790":[14,15],"\ubb38\uc790\uac00":15,"\ubb38\uc790\ub294":15,"\ubb38\uc790\ub4e4\ub85c":15,"\ubb38\uc790\ub4e4\ub9cc":15,"\ubb38\uc790\ub4e4\uc740":[14,15],"\ubb38\uc790\ub4e4\uc774":15,"\ubb38\uc790\ub85c":15,"\ubb38\uc790\ub85c\ub9cc":15,"\ubb38\uc790\ub97c":15,"\ubb38\uc790\uc5d0":15,"\ubb38\uc7a5":15,"\ubb38\uc7a5\uc744":15,"\ubb38\uc81c\uac00":15,"\ubbf8\ub9ac":15,"\ubc0f":15,"\ubc14":15,"\ubc14\uafb8\uc5b4":15,"\ubc14\uafd4\ubcf4\uc790":15,"\ubc14\uafd4\uc8fc\uae30\uac00":15,"\ubc14\uafd4\uc8fc\ub824":15,"\ubc14\uafd4\uc8fc\uc5c8\ub2e4":15,"\ubc18\ud658\ud588\ub2e4":15,"\ubc1b\uc544":15,"\ubc1b\uc73c\uba74\uc11c":15,"\ubc1c\uc131\ud55c":15,"\ubc1c\uc74c\uc73c\ub85c":15,"\ubc1c\uc74c\uc804\uc0ac":[14,15],"\ubc1c\uc74c\uc804\uc0ac\ub97c":15,"\ubc30\uc6cc\ubd24\uc5b4":15,"\ubc31":15,"\ubc88\ud638\ub294":15,"\ubc88\ud638\ub97c":15,"\ubc8c\ub2e4":15,"\ubc8c\uba74":15,"\ubcc0\uc218\ub97c":15,"\ubcc0\ud658":15,"\ubcc0\ud658\uae4c\uc9c0":15,"\ubcc0\ud658\ub418\uc5c8\ub294\uc9c0":15,"\ubcc0\ud658\ub41c":[14,15],"\ubcc0\ud658\uc744":15,"\ubcc0\ud658\ud574\ubcf4\uc790":15,"\ubcc0\ud658\ud574\uc8fc\uae30\ub9cc":15,"\ubcc0\ud658\ud574\uc8fc\ub294":15,"\ubcf4\uc774\uae34":15,"\ubcf8":15,"\ubd88\ub7ec\uc624\uace0":15,"\ubd99\ub294":15,"\ube61\uc140\uac78":15,"\uc0ac\uc2ed":15,"\uc0ac\uc6a9":[14,15],"\uc0ac\uc6a9\ub41c":[14,15],"\uc0ac\uc6a9\ud558\uace0":[],"\uc0ac\uc6a9\ud55c":15,"\uc0ac\uc6a9\ud560":15,"\uc0ad\uc81c":[14,15],"\uc0bc":15,"\uc0c1\ub2f9\ud788":15,"\uc0dd\uac01\ud588\uace0":15,"\uc0dd\uae38":15,"\uc0dd\uc18c\ud55c":15,"\uc0fe":15,"\uc11e\uc5b4\uc8fc\uae30":15,"\uc11e\uc5b4\uc900\ub2e4":15,"\uc11e\uc5ec\uc9c4":15,"\uc120\ud0dd\ud558\uae30":15,"\uc138\ubc00\ud558\uac8c":15,"\uc18c\ub9ac":15,"\uc18c\ub9ac\uc57c":[14,15],"\uc218":15,"\uc218\ub3d9\uc73c\ub85c":15,"\uc218\uc791\uc5c5\uc73c\ub85c":15,"\uc21c\uc11c\ub300\ub85c":15,"\uc21c\uc11c\ub85c":15,"\uc21c\uc11c\ub97c":15,"\uc22b\uc790":15,"\uc22b\uc790\ub07c\ub9ac\ub294":15,"\uc22b\uc790\ub808\uc774\ube14\ub85c":15,"\uc22b\uc790\ub808\uc774\ube14\uc5d0\uc11c":15,"\uc22b\uc790\ub85c":15,"\uc22b\uc790\ub97c":15,"\uc2a4\ud06c\ub9bd\ud2b8":14,"\uc2dc\ud0ac":15,"\uc2dc\ud0ac\uc218\uac00":15,"\uc2e0\uccad":15,"\uc2e4\uc81c\ub85c":15,"\uc2e4\ud589\uc2dc\ucf1c\uc11c":15,"\uc2ed":[14,15],"\uc544":[14,15],"\uc544\ub798\ubd80\ud130":15,"\uc544\uc608":15,"\uc548\uc5d0":15,"\uc548\uc5d0\ub294":15,"\uc560\ub9e4\ud588\ub2e4":15,"\uc57d":15,"\uc5b4\ub5a0\ud55c":15,"\uc5b8\uae09\ub41c":15,"\uc5c6\uc5b4\uc11c":15,"\uc5c6\uc73c\ubbc0\ub85c":15,"\uc5d0":15,"\uc5d0\ub7ec":15,"\uc5d0\uc11c":15,"\uc5f0\ub77d\uc8fc\uc2dc\uba74":15,"\uc624\ub514\uc624":15,"\uc640":15,"\uc644\uc131\ub418\uc5c8\ub2e4":15,"\uc6b0\ub9ac":15,"\uc6b0\ub9ac\uac00":15,"\uc6b0\ub9ac\ub294":15,"\uc6d0\ud558\ub294":15,"\uc704":15,"\uc704\uc5d0\uc11c":15,"\uc704\uc640":15,"\uc704\uc758":15,"\uc704\ud558\uc5ec":15,"\uc704\ud55c":15,"\uc704\ud574":[14,15],"\uc704\ud574\uc11c":15,"\uc73c\ub85c":15,"\uc744":15,"\uc74c\uc131":[14,15],"\uc74c\uc131\ub370\uc774\ud130":[14,15],"\uc74c\uc131\uc5d0":15,"\uc758":15,"\uc758\ubbf8\uac00":15,"\uc774":[14,15],"\uc774\ub54c":15,"\uc774\ub7ec\ud55c":15,"\uc774\ub807\uac8c":15,"\uc774\ub85c\uc368":15,"\uc774\ub8e8\uc5b4\uc838":15,"\uc774\ub8e8\uc5b4\uc9c0\ub294":15,"\uc774\ub8e8\uc5b4\uc9c4":15,"\uc774\ubc31":15,"\uc774\uc0c1":15,"\uc774\uc5d0":15,"\uc774\uc6a9\ud558\uc5ec":15,"\uc774\uc6a9\ud574\uc11c":15,"\uc774\uc81c":15,"\uc774\ud574\ud560":15,"\uc778\ub371\uc2a4\ub85c":14,"\uc77c":15,"\uc77c\uc815\ud55c":15,"\uc785\ub825\uc73c\ub85c":15,"\uc788\uac8c":15,"\uc788\uace0":15,"\uc788\ub294":15,"\uc788\ub294\uc9c0\ub97c":15,"\uc788\ub2e4":15,"\uc788\ub3c4\ub85d":15,"\uc788\uc2b5\ub2c8\ub2e4":15,"\uc788\uc5c8\ub2e4":15,"\uc790\uc720\uc790\uc7ac\ub85c":15,"\uc791\uc5c5\uc5d0":15,"\uc791\uc5c5\uc740":15,"\uc791\uc5c5\uc758":15,"\uc791\uc5c5\ud588\uc2b5\ub2c8\ub2e4":15,"\uc798":15,"\uc7a1\uc544\uc8fc\ub294":15,"\uc7a1\uc74c":[14,15],"\uc800\uc7a5\ud55c\ub2e4":15,"\uc800\uc7a5\ud574\uc900\ub2e4":15,"\uc804\ucc98\ub9ac":15,"\uc804\ucc98\ub9ac\ub97c":15,"\uc804\uccb4":[14,15],"\uc815\ub2f5":14,"\uc815\ub3c4\ub97c":15,"\uc815\uc0c1\uc801\uc73c\ub85c":15,"\uc815\uc758\ud55c":15,"\uc815\uc758\ud574\ub454\ub2e4":15,"\uc815\uc758\ud574\ubcf4\uc790":15,"\uc815\uc758\ud574\uc8fc\uc5c8\ub2e4":15,"\uc815\uc758\ud588\ub2e4":15,"\uc815\ud655\ud558\uac8c":15,"\uc81c\uac70\ud574\uc900":15,"\uc81c\uacf5\ub418\ub294":15,"\uc81c\uacf5\ub41c":[14,15],"\uc81c\uacf5\ud558\ub294":15,"\uc81c\uacf5\ud55c":14,"\uc81c\uc678\ub97c":15,"\uc81c\uc678\ud55c":[14,15],"\uc870\uc6a9\ud55c":15,"\uc885\ub8cc\ub410\ub2e4\uba74":15,"\uc8fc\ubaa9\ud588\ub2e4":15,"\uc900":15,"\uc911":[14,15],"\uc918\uc57c":15,"\uc9c4\ud589\uc744":15,"\uc9c4\ud589\ud558\uae30":15,"\ucc28\uc9c0\ud588\ub294\ub370":15,"\ucc98\ub9ac":15,"\ucc98\ub9ac\ub97c":15,"\ucca0\uc790\uc804\uc0ac":[14,15],"\ucd1d":15,"\ucd5c\ub300\ud55c":15,"\ucd94\uac00":15,"\ucd94\uac00\ud574":15,"\uce60":[14,15],"\uce60\uc2ed":15,"\ucee4":15,"\ucef4\ud4e8\ud130\uac00":15,"\ucf54\ub4dc\ub97c":15,"\ucf54\ub4dc\uc774\ub2e4":15,"\ud06c\uac8c":15,"\ud0c0\uac9f":15,"\ud14c\uc2a4\ud2b8":15,"\ud14c\uc2a4\ud2b8\ub370\uc774\ud130\ub85c":15,"\ud14c\uc2a4\ud2b8\uc6a9":[14,15],"\ud14d\uc2a4\ud2b8":15,"\ud14d\uc2a4\ud2b8\ub294":15,"\ud14d\uc2a4\ud2b8\ub85c":15,"\ud14d\uc2a4\ud2b8\ub85c\ub294":15,"\ud14d\uc2a4\ud2b8\ub85c\uc758":15,"\ud14d\uc2a4\ud2b8\ub97c":15,"\ud14d\uc2a4\ud2b8\uc5d0\uc11c":15,"\ud1b5\ud574\uc11c":[14,15],"\ud2b8\ub808\uc774\ub2dd":15,"\ud2b8\ub808\uc774\ub2dd\uc744":15,"\ud2b9\uc218":15,"\ud300\uc740":15,"\ud30c\uc545\ud574\uc57c\ud55c\ub2e4":15,"\ud30c\uc77c":15,"\ud30c\uc77c\uacfc":15,"\ud30c\uc77c\ub4e4\ub85c\ub9cc":15,"\ud30c\uc77c\ub4e4\uc744":15,"\ud30c\uc77c\ub85c":15,"\ud30c\uc77c\uc740":15,"\ud30c\uc77c\uc744":15,"\ud30c\uc77c\uc758":15,"\ud30c\uc77c\uc774":15,"\ud310\ub2e8\ud588\ub2e4":15,"\ud37c\uc13c\ud2b8":[14,15],"\ud37c\uc13c\ud2b8\uac00":15,"\ud3b8\uc758\ub97c":15,"\ud3ec\ub9f7\uc5d0":15,"\ud3ec\ub9f7\uc758":15,"\ud3ec\ud568\ub41c":15,"\ud3ec\ud568\ud558\uc5ec":15,"\ud3f4\ub354":15,"\ud3f4\ub354\uac00":15,"\ud3f4\ub354\ub85c":15,"\ud45c\uae30":15,"\ud45c\ucc98\ub7fc":15,"\ud45c\ud604":[14,15],"\ud544\uc694\ud55c":15,"\ud544\ud130\ub9c1":15,"\ud544\ud130\ub9c1\ud574\uc8fc\ub294":15,"\ud558\ub098\uc758":15,"\ud558\ub098\ud558\ub098":15,"\ud558\ub294":15,"\ud558\ub294\ub370":15,"\ud558\uba74":15,"\ud558\uc2e4":15,"\ud559\ub144":15,"\ud559\uc2b5":15,"\ud559\uc2b5\uc6a9":[14,15],"\ud559\uc2b5\uc744":15,"\ud559\uc2b5\ud558\ub294":15,"\ud55c\uad6d\uc5b4":[14,15],"\ud55c\uae00":15,"\ud55c\uae00\ub85c":15,"\ud55c\ub2e4":15,"\ud560":15,"\ud568\uc218":15,"\ud568\uc218\ub4e4\uc744":15,"\ud568\uc218\ub97c":15,"\ud568\uc218\uc774\ub2e4":15,"\ud574\ub2f9":15,"\ud574\ub2f9\ud558\ub294":15,"\ud574\ubc84\ub9ac\uba74":15,"\ud574\ubcf4\uc790":15,"\ud574\uc11c":15,"\ud588\uc9c0\ub9cc":15,"\ud615\uc2dd\uc5d0":15,"\ud615\uc2dd\uc73c\ub85c":15,"\ud615\ud0dc\ub85c":15,"\ud615\ud0dc\ub85c\uc758":15,"\ud655\ub960\uc774\ub77c\ub2c8":[14,15],"\ud655\uc778\uc744":15,"\ud655\uc778\ud558\uace0":15,"\ud655\uc778\ud558\uae30":15,"\ud655\uc778\ud574\ubcf8":15,"\ud655\uc778\ud574\uc11c":15,"\ud655\uc778\ud588\ub2e4":15,"\ud658\uacbd\uc5d0\uc11c":15,"\ud658\uc601\ud569\ub2c8\ub2e4":15,"\ud6c4":15,"\ud6c4\uc5d0":15,"\ud6c8\ub828\ub370\uc774\ud130":15,"b\ub9cc\uc744":15,"break":15,"char":[14,15],"class":[0,4,7,8,10],"default":[0,3,4,10,12,14],"dict\ub85c":15,"dict\ub97c":15,"dict\uc640":15,"dictionary\ub97c":14,"float":[2,4,8,10,12,14],"function":[2,8,10,12],"hub\uc5d0\uc11c":[14,15],"id\ub85c":15,"id\ub97c":15,"import":[15,16],"int":[0,4,14,15],"labels\uc5d0":15,"new":16,"num\uc73c\ub85c":15,"paths\ub97c":15,"paths\uc640":15,"return":[0,1,2,3,5,6,8,10,12,14,15],"true":[0,3,4,10,14,15],"while":[8,10],For:16,IDs:10,LAS:[10,16],The:[4,7,10,12,14,16],Use:14,Used:10,Using:[14,15,16],abov:16,abs:10,activ:7,affin:14,after:[4,16],afterward:[8,10],agre:[10,16],aidata:15,aihub:15,aihub_label:15,algirithm:16,algorithm:[14,16],all:[8,10],allow:[4,10],alreadi:16,also:16,although:[8,10],amplitude_to_db:14,ani:[7,10,16],anoth:16,apach:[10,16],append:15,appli:[0,4,10,14],applic:[10,16],appreci:16,appropri:16,architectur:[13,16],area:3,arg:7,argument:7,arrai:[10,14],arxiv:10,ascontiguousarrai:14,attend:[10,16],attent:[4,14,16],attn:10,audio:[0,3,6,15,16],audio_path:[0,6,15],augment:[0,3,4,9,14,16],augment_ratio:[0,4],automat:[3,9,14,16],avoid:[4,10],base:[7,14,16],base_path:15,basedataload:7,basedataset:[0,7],basi:[10,16],batch:[0,4,7,10,14],batch_first:14,batch_num:[],batch_shuffl:0,batch_siz:[0,4,7,10],batchnorm2d:14,batchsiz:10,beam_scor:10,becom:[4,10,14],befor:13,begin:10,being:16,between:1,bia:14,bidirect:[4,10,14],bit:16,blob:[3,9,14],bool:4,bos:5,bos_id:[0,5],bottom_rnn:14,bracket:15,brain:[3,9,14],bug:16,build:16,calcul:[1,8],call:[8,10],callabl:7,can:16,care:[8,10],ceil_mod:14,cell:[4,10],cepstral:3,cer:[2,11,12,14],certain:[4,10],ch_label:15,chakraborti:14,chan:14,char2id:[6,15],char2index:[],char_dist:1,char_list:15,charact:[1,2,6,10,12],charat:1,checkout:16,chorowski:14,classfic:[8,10],close:15,code:14,coeffici:3,collabor:16,com:[3,8,9,14,15,16],command:16,comment:10,compil:15,complianc:[10,16],comput:[3,8,10,16],concat:[],concaten:14,conda:16,condit:[10,16],confid:8,constructor:7,contact:16,contain:10,context:10,continu:15,conv2d:14,conv:[10,14],convert:[5,10],copi:[10,16],copyright:[10,16],core:[4,7,12,14],correspond:16,cp949:15,cpu:[2,4,7,12],creat:16,criterion:[2,12],crossentropyloss:[2,12],crr:14,csv:[6,14,15],cuda:[2,4,12],cumul:10,current:16,data:[0,3,4,6,7,9,16],data_list_path:6,data_path:15,datafram:15,dataset:[3,7,13,16],dataset_list:7,dataset_path:6,decai:9,decod:10,decode_funct:10,decoder_hidden:10,decoder_hidden_s:10,decoder_output:10,def:[14,15],defin:[8,10,16],defulat:10,del_sil:[3,14],delet:3,demiseom:[3,9,14],descend:0,detail:[13,16],determin:12,develop:16,devic:[2,10,12],dict:[6,15],dictionari:[0,5,6,15],dilat:14,dim:8,dimens:10,diment:8,directli:8,discuss:16,displai:15,distanc:[13,14],distribut:[8,10,16],docstr:16,document:16,done_beam:10,done_beam_scor:10,drawn:10,dropout:[4,10,14],dropout_p:10,dtype:14,dure:10,each:10,edit:14,effect:14,either:[10,16],elif:[14,15],els:[10,14,15],embed:[10,14,16],enabl:16,encod:[6,8,10,14,15],encoder_output:10,end:[1,5,10,14,15],english:16,enumer:15,environ:16,eos:[5,10],eos_id:[0,1,5,10],eos_token:10,epoch:[4,11,12,14],eps:14,error:[2,12,14],error_r:[],especi:16,etc:[2,12],evalu:13,evalut:2,everi:[8,10],evolv:16,exampl:[10,15],except:[10,14,15,16],exp:10,exp_decai:9,expect:10,explan:16,exponenti:9,express:[10,16],extract:[],extrem:[4,10],fals:[0,3,4,10,14,15],fast:[10,16],feat:[3,10,14],feat_siz:[10,14],featur:[0,4,10,13,16],feedback:16,feel:16,fft:14,field:16,filanam:[14,15],file:[3,5,6,10,11,16],file_pad:15,filenam:[0,5,6,14,15],filenum:[14,15],filepath:[3,5,6,14,15],filter:[3,15],fix:16,flag:[0,3,4,10,14,15],flagind:[],flatten:10,flatten_paramet:10,floattensor:14,fname:15,follow:16,forc:[4,10,12,14],format:[3,5,15],former:[8,10],forward:[8,10],frame:[3,14],frame_length:3,free:16,freq:[3,14,15],freq_list:15,freq_mask_num:[3,14],frequenc:[3,14],frequent:16,from:[4,7,8,10,15],gener:[10,16],get:[9,10,15],get_dist:1,get_label:5,get_librosa_melspectrogram:[3,14],get_librosa_mfcc:3,get_lr:9,github:[3,8,9,14,15,16],given:10,gmail:[15,16],googl:[3,9,14,16],govern:[10,16],ground:8,gru:[10,14],guid:16,ham:[3,14],hangeul:5,hardtanh:14,has:8,have:16,help:14,here:16,hidden:[4,10,14],hidden_s:[4,10],high:14,high_plateau_lr:4,higher:10,hook:[8,10],hop:14,hop_length:[3,14],how:[3,12],hparam:[0,9,12,13,16],http:[3,8,9,10,14,15,16],hub:[3,14,15,16],hyper:[0,3],hyperparam:4,hyperparamet:[4,16],ibm:[14,16],id2char:[1,5,6,15],id_list:15,identif:[1,5,7],idx:15,ignor:[8,10],ignore_index:8,implement:16,impli:[10,16],improv:16,in_channel:10,in_featur:14,index2char:[],index:[8,10,15],indic:[0,3,4,10,14],infer:10,init_decoder_input:10,init_lr:4,initi:[4,10],inplac:14,input:[0,3,4,10,14],input_dropout:14,input_len:10,input_revers:[0,3,4,14],input_s:10,instanc:[8,10],instead:[8,10],integ:8,interdisciplinari:16,introduct:13,invalid:14,invok:7,issu:[8,16],kai:[10,14,16],kaispeech:[14,15],kaispeech_000001:14,kaispeech_000002:14,kaispeech_001348:15,kaispeech_622245:14,kaispeech_:15,kaispeech_label_000001:14,kaispeech_label_000002:14,kaispeech_label_622245:14,kaispeech_label_:15,kernel_s:14,keyword:7,kind:[10,16],korean:[15,16],kwarg:7,label:[0,4,6,8,13],label_df:15,label_freq:15,label_list:15,label_path:[0,6],label_smooth:8,label_to_str:5,labelsmoothingloss:[2,8,12],labl:14,languag:[10,16],latter:[8,10],law:[10,16],layer:[10,14],layer_s:10,learn:[4,9,10,14],len:15,length:[0,1,3,4,10,14,15],leran:4,level:[10,14],levenshtein:[14,16],lib:[10,16],librosa:[14,16],licens:10,like:16,limit:[3,10,16],lin:14,linear:14,linguist:16,list2d:[],list:[0,5,6,10],listen:[4,16],listenattendspel:14,listener_hidden:10,listener_layer_s:4,listener_output:10,littl:16,load:[4,13,14],load_data_list:6,load_label:[6,15],load_pickl:6,load_result:6,load_target:6,loader:13,local:[],log:[3,14],log_mel:[3,14],log_softmax:10,logarithm:8,logit:8,loss:[2,11,12,13],low:[10,14],low_plateau_lr:4,mai:[7,10,16],main:16,mainli:16,maintain:[4,10],major:16,make:3,mani:[3,12],mask:[3,14],master:[3,9,14,15],match:0,math:10,max:[4,14],max_epoch:4,max_len:[4,10],max_val:14,maximum:[4,10],maxpool2d:14,maxpool_layer_num:10,mean:15,mechan:[4,10,14],mel:[3,14],mel_typ:[3,14],melspectrogram:14,memmap:14,messag:[6,11],met:10,method:[3,7,9,14,16],methodolog:16,mfcc:[3,14,16],middle_rnn:14,min_val:14,mini:[0,4,10,14],mode:14,model:[2,8,12,13,16],modifi:16,modul:[8,9,10],momentum:14,more:[13,16],multi:[7,10,14],multiload:7,multipl:10,multistep:4,n_fft:[3,14],n_mel:[3,14],n_mfcc:3,need:[8,10],new_fnam:15,new_sent:15,nois:15,non_silence_indic:14,none:[0,3,5,10,15],notat:10,note:13,num:[0,4],num_direct:10,num_lay:[10,14],number:[3,4,5,7,8,10,12,14],numpi:16,object:[7,10],obtain:[10,16],onc:10,one:[8,10],ongo:[10,14],onli:16,open:[15,16],optim:[9,12],option:[],order:[],org:[10,14,16],our:16,out:14,out_channel:10,out_featur:14,output:[10,12,15],output_len:10,over:10,overlap:3,overrid:7,overridden:[8,10],pack:[0,4],pack_by_length:[0,4],packag:16,pad:[14,15],panda:[15,16],paper:[10,16],paramet:[0,1,2,3,5,6,7,8,10,12,14],pass:[7,8,10],path:[0,3,5,6,15,16],pattern:15,pcm:[3,14,15],per:[],perform:[8,10],permiss:[10,16],phase:4,pickl:[4,6,11],pip:16,pleas:16,plstm:14,point:8,pointer:10,possibl:16,prepar:13,present:12,print:15,print_time_step:12,probabl:[4,8,10,12,14],problem:16,proce:16,process:[4,10],progress:15,project:16,provid:[1,3,5,6,8,10],publish:16,pyramid:[4,10,14],pyramidalrnn:[10,14],python:16,pytorch:[8,14,16],question:16,queue:[2,7,12],rais:14,ramp:4,ramp_up:9,rampup:9,randint:14,random:[4,10,14,15],rang:14,rare:15,rare_in:15,rare_label:15,rate:[2,3,4,9,12,14],ratio:[0,4,8,14],raw:[14,15],raw_sent:15,read_csv:15,readlin:15,recip:[8,10],recognit:[3,9,14,15,16],recommend:16,recurr:10,reduct:10,ref:14,refer:[3,8,10,14],regist:[8,10],remain_drop:0,report:16,repositori:15,repres:7,represent:5,request:16,requir:[10,16],resolut:10,respect:7,result:[1,6,10,11],ret_dict:[],revers:[0,3,4,14,15],rnn:[4,10,14],rnn_cell:10,root:14,run:[7,8,10,16],same:[],sampl:[3,10,14],save:13,save_epoch_result:11,save_pickl:11,save_step_result:11,save_var:11,savepath:11,scale:3,score:10,search:10,see:[10,16],seed:4,self:[10,14,16],selfattent:14,sentenc:[5,10,14,15,16],sentence_mark:15,seq2seq:[10,14,16],seq_len:[10,14],sequenc:[0,1,4,5,10],sequenti:[7,14],set:[0,1,4,6,9,16],set_lr:9,setup:16,setuptool:16,sh951011:[15,16],shape:8,should:[8,10,16],shuffl:[0,15],signal:[3,10,14],silenc:3,silent:[8,10],similar:[0,4],simpl:[3,9,14,16],sinc:[8,10],size:[0,4,7,10,14],slow:[4,10],small:16,smaller:10,smooth:[4,8,14],soectrigram:3,softwar:[10,16],soon:16,sort:[0,15],sort_by_length:0,sos_id:[0,5,10],sos_token:10,sound:15,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12],spec:[0,4,14],spec_aug:[3,14],spec_augment_pytorch:[3,9],specaug:[3,9,14,16],special:15,specif:[3,5,10,16],specifi:10,spectrogram:[3,14],speech:[3,9,10,14,15,16],spell:[10,16],speller:[4,14],speller_hidden:[],speller_layer_s:[4,14],speller_output:10,split:[0,14,15],split_dataset:0,spoken:16,standard:7,start:[5,10,14,15],state:[4,10,14],step:[4,10,11,12,14],store:10,str:[5,15],stride:[3,14],string:5,strip:15,structur:[10,16],studi:16,sub:15,subclass:[7,8,10],subfield:16,sum:8,sum_j:10,support:16,swapax:14,symbol:10,take:[8,10],taken:7,tanh:10,target:[1,7,8,10],target_dict:[0,5,6],target_fnam:15,target_path:15,teacher:[4,10,12,14],teacher_forc:4,teacher_forcing_ratio:[10,12],team:[3,9],techniqu:16,technolog:16,temp:[],tensor:[3,10],termin:10,test1:15,test2:15,test:[6,14,15],test_data_list:15,test_df:15,test_dict:15,test_label:15,test_list:15,test_num:15,text:16,than:10,them:[8,10],thi:[7,8,10,16],thread:[2,7,12],thread_id:7,thruth:8,time:[3,10,11,14],time_mask_num:[3,14],time_step:9,to_csv:15,togeth:15,token:10,top:10,top_db:14,top_rnn:14,torch:[3,10,14],total:1,total_dist:1,total_length:1,total_num:15,total_time_step:[9,12],tqdm:[15,16],track_running_stat:14,train:[0,2,6,8,9,10,11,12,13],train_batch_num:0,train_begin:12,train_begin_idx:[],train_data_list:15,train_dataset_list:0,train_df:15,train_dict:15,train_end_idx:[],train_ful:15,train_list:15,train_num:15,train_num_per_work:[],train_result:11,train_step_result:11,trainer:13,trang:15,translat:16,tree:15,txt:[14,15],type:[0,1,2,3,5,6,8,10,12],under:[10,16],uniform:14,uniformli:10,unit:11,unless:[10,16],use:[0,4,10,14,16],use_attent:[4,10],use_aug:[0,4],use_beam_search:10,use_bidirect:[4,10],use_cuda:4,use_label_smooth:4,use_multistep_lr:4,use_pickl:4,use_pyramid:[4,10],used:[2,4,7,10,12,14],using:[7,16],utf:[6,15],util:[0,1,3,4,5,6,7,11,13],utter:10,valid:0,valid_batch_num:[],valid_dataset:0,valid_ratio:0,valid_result:11,valu:[3,8,10],valueerror:14,variabl:[],vector:[],version:[10,16],virtual:16,virtualenv:16,vocab_s:[8,10],vocabulari:10,voic:[14,16],wait:16,want:16,warp:14,warranti:[10,16],wav:[3,14],websit:16,when:[8,10],whether:[0,3,4,10,14],which:[8,10],whose:10,wiki:14,wikipedia:14,window:[3,14],within:[8,10],without:[10,16],word:8,worker:[],worker_num:[4,7,12],would:10,write:[10,15,16],written:16,www:[10,15,16],x_i:10,x_j:10,y_hat:[1,10],you:[7,10,16],your:16,zhouhan:14,zip:15},titles:["Dataset","Distance","Evaluator","Feature","Hparams","Label","Load","Loader","Loss","Lr","Models","Save","Trainer","Welcome to Korean Speech Recognition\u2019s documentation!","More Details","Preparation before Training","Introduction"],titleterms:{"function":15,"new":15,architectur:14,attend:14,attent:10,base:15,beam:10,befor:[15,16],bracket_filt:15,charact:[14,15],code:16,contact:15,contribut:16,creat:15,data:[14,15],dataset:[0,14],detail:14,distanc:1,document:13,evalu:2,featur:[3,14],filenum_pad:15,folder:14,format:14,from:16,get:16,get_path:15,hparam:4,hyperparamet:14,instal:16,introduct:16,korean:13,label:[5,14,15],licens:16,list:[14,15],listen:[10,14],listenattendspel:10,load:6,loader:7,loss:8,member:14,model:[10,14],more:14,prepar:[15,16],preprocess:[14,15],prerequisit:16,recognit:13,refer:[9,16],roadmap:16,save:11,score:14,sentence_filt:15,sentence_to_target:15,sourc:16,specaugment:14,special_filt:15,speech:13,spell:14,speller:10,start:16,structur:[14,15],style:16,target:15,target_to_sent:15,team:14,test:16,text:15,train:[14,15,16],trainer:12,troubleshoot:16,welcom:13}})