CREATE TEMPORARY TABLE IF NOT EXISTS
  tech_points ( INDEX(id) )
AS (
  select d.id, AVG(r.points) as 'avgtech'
  from developers d
  inner join rankings r on r.developerId = d.id
  inner join questions q on r.questionId = q.id
  where q.type = 'tech' and r.points > 0
  group by 1
);

CREATE TEMPORARY TABLE IF NOT EXISTS
  soft_skill_points ( INDEX(id) )
AS (
  select d.id, AVG(r.points) as 'avghse'
  from developers d
  inner join rankings r on r.developerId = d.id
  inner join questions q on r.questionId = q.id
  where q.type REGEXP 'hse' and r.points > 0
  group by 1
);

select distinct d.name, d.lastname, d.age, d.campusId, d.photoUrl,
d.title, s.name as 'squad', IFNULL(tp.avgtech, 0) as avgtech,
IFNULL(tss.avghse, 0) as avghse
from developers d
inner join squads s on d.squadId = s.id
left join tech_points tp on tp.id = d.id
left join soft_skill_points tss on tss.id = d.id
where d.campusId = 42
group by d.name, d.lastname, d.age, d.campusId, d.photoUrl
order by (IFNULL(tp.avgtech, 0) + IFNULL(tss.avghse, 0)) desc;
