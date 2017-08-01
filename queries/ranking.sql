select distinct d.name, d.lastname, d.age, d.campusId, d.photoUrl,
d.title, s.name as 'squad', d.ranking, IFNULL(tp.avgtech, 0) as 'avgtech',
IFNULL(tss.avghse, 0) as 'avghse', IFNULL(tp.avgtech, 0) + IFNULL(tss.avghse, 0) as 'avg'
from developers d
inner join squads s on d.squadId = s.id
left join (
  select d.id, AVG(r.points) as 'avgtech'
  from developers d
  inner join rankings r on r.developerId = d.id
  inner join questions q on r.questionId = q.id
  where q.type in ('tech','uxd') and r.points > 0
	and d.campusId = ?
  group by 1
) as tp on tp.id = d.id
left join (
  select d.id, AVG(r.points) as 'avghse'
  from developers d
  inner join rankings r on r.developerId = d.id
  inner join questions q on r.questionId = q.id
  where q.type REGEXP 'hse' and r.points > 0
	and d.campusId = ?
  group by 1
) as tss on tss.id = d.id
where d.campusId = ?
group by d.name, d.lastname, d.age, d.campusId, d.photoUrl,
d.title, s.name, d.ranking, IFNULL(tp.avgtech, 0), IFNULL(tss.avghse, 0),
IFNULL(tp.avgtech, 0) + IFNULL(tss.avghse, 0)
order by avg desc, d.ranking, d.name;
